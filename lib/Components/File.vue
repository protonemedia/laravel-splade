<template>
  <div ref="file">
    <slot
      :handle-file-input="handleFileInput"
      :filenames="filenames"
    />
  </div>
</template>

<script>
import { default as Axios } from "axios";
import find from "lodash-es/find";

export default {
    props: {
        form: {
            type: Object,
            required: true
        },

        field: {
            type: String,
            required: true
        },

        multiple: {
            type: Boolean,
            required: true
        },

        filepond: {
            type: [Boolean, Object],
            required: false,
            default: true,
        },

        jsFilepondOptions: {
            type: Object,
            required: false,
            default: () => {
                return {};
            }
        },

        placeholder: {
            type: String,
            required: false,
            default: "",
        },

        preview: {
            type: Boolean,
            required: false,
            default: false,
        },

        server: {
            type: [Boolean, String],
            required: false,
            default: false,
        },

        accept: {
            type: Array,
            required: false,
            default: () => [],
        },

        minFileSize: {
            type: [Boolean, Number, String],
            required: false,
            default: false,
        },

        maxFileSize: {
            type: [Boolean, Number, String],
            required: false,
            default: false,
        },

        minImageWidth: {
            type: [Boolean, Number],
            required: false,
            default: false
        },

        maxImageWidth: {
            type: [Boolean, Number],
            required: false,
            default: false
        },

        minImageHeight: {
            type: [Boolean, Number],
            required: false,
            default: false
        },

        maxImageHeight: {
            type: [Boolean, Number],
            required: false,
            default: false
        },

        minImageResolution: {
            type: [Boolean, Number],
            required: false,
            default: false
        },

        maxImageResolution: {
            type: [Boolean, Number],
            required: false,
            default: false
        },
    },

    emits: ["start-uploading", "stop-uploading"],

    data() {
        return {
            inputElement: null,
            filepondInstance: null,
            filenames: [],
            uploadedFiles: [],
        };
    },

    mounted() {
        this.inputElement = this.$refs["file"].querySelector("input[type=\"file\"]");

        this.form.$put(this.field, this.multiple ? [] : null);

        if(this.filepond) {
            this.initFilepond();
        }
    },

    methods: {
        loadFilepondPlugins() {
            const plugins = [];

            if(this.preview) {
                plugins.push(import("filepond-plugin-image-preview"));
                plugins.push(import("filepond-plugin-image-exif-orientation"));
            }

            if(this.accept.length > 0) {
                plugins.push(import("filepond-plugin-file-validate-type"));
            }

            if(this.minFileSize || this.maxFileSize) {
                plugins.push(import("filepond-plugin-file-validate-size"));
            }

            if(this.minImageWidth || this.maxImageWidth || this.minImageHeight || this.maxImageHeight || this.minImageResolution || this.maxImageResolution) {
                plugins.push(import("filepond-plugin-image-validate-size"));
            }

            return Promise.all(plugins);
        },

        initFilepond() {
            const vm = this;

            import("filepond").then((filepond) => {
                const options = Object.assign({}, vm.filepond, vm.jsFilepondOptions, {
                    onaddfile(error, file) {
                        if(error) {
                            return;
                        }

                        if(!vm.server) {
                            vm.addFiles([file.file]);
                        } else {
                            vm.$emit("start-uploading", [file.id]);
                        }
                    },
                    onremovefile(error, file) {
                        if(error) {
                            return;
                        }

                        vm.removeFile(file.file);
                    },
                    onprocessfile(error, file) {
                        if(error) {
                            return;
                        }

                        vm.uploadedFiles.push({
                            file: file.file,
                            id: file.serverId
                        });

                        vm.addFiles([file.serverId]);

                        vm.$emit("stop-uploading", [file.id]);
                    },
                });

                if(this.accept.length > 0) {
                    options.acceptedFileTypes = this.accept;
                }

                if(this.minFileSize) {
                    options.minFileSize = this.minFileSize;
                }

                if(this.maxFileSize) {
                    options.maxFileSize = this.maxFileSize;
                }

                if(this.minImageWidth) {
                    options.imageValidateSizeMinWidth = this.minImageWidth;
                }

                if(this.maxImageWidth) {
                    options.imageValidateSizeMaxWidth = this.maxImageWidth;
                }

                if(this.minImageHeight) {
                    options.imageValidateSizeMinHeight = this.minImageHeight;
                }

                if(this.maxImageHeight) {
                    options.imageValidateSizeMaxHeight = this.maxImageHeight;
                }

                if(this.minImageResolution) {
                    options.imageValidateSizeMinResolution = this.minImageResolution;
                }

                if(this.maxImageResolution) {
                    options.imageValidateSizeMaxResolution = this.maxImageResolution;
                }

                if(this.server) {
                    options.server = {
                        process: (fieldName, file, metadata, load, error, progress, abort) => {
                            // fieldName is the name of the input field
                            // file is the actual file object to send
                            const formData = new FormData();
                            formData.append("file", file, file.name);

                            const CancelToken = Axios.CancelToken;
                            const source = CancelToken.source();

                            Axios({
                                url: vm.server,
                                method: "POST",
                                data: formData,
                                cancelToken: source.token,
                                onUploadProgress: e => {
                                    progress(e.lengthComputable, e.loaded, e.total);
                                },
                            }).then((response) => {
                                if (response.status >= 200 && response.status < 300) {
                                    load(response.data);
                                } else {
                                    error(response.statusText);
                                }
                            }).catch(function (thrown) {
                                if (axios.isCancel(thrown)) {
                                    abort();
                                } else {
                                    error(thrown.response?.statusText);
                                }
                            });
                        },

                        revert: (path, load, error) => {
                            Axios({
                                url: vm.server,
                                method: "POST",
                                data: { _method: "DELETE", file: path },
                            }).then(() => {
                                load();
                            }).catch(function (thrown) {
                                error(thrown.response?.statusText);
                            });
                        },
                    };
                }

                this.loadFilepondPlugins(filepond).then((plugins) => {
                    if(plugins.length > 0) {
                        filepond.registerPlugin(...plugins.map(plugin => plugin.default));
                    }

                    this.filepondInstance = filepond.create(this.inputElement, options);
                });
            });
        },

        removeFile(file) {
            if(this.server) {
                file = find(this.uploadedFiles, (uploadedFile) => uploadedFile.file === file).serverId;
            }

            this.form.$put(this.field, this.multiple ? this.form[this.field].filter((f) => f !== file) : null);
        },

        addFiles(input) {
            if(this.multiple) {
                const files = this.form[this.field];

                input.forEach((file) => {
                    files.push(file);
                });

                this.form.$put(this.field, files);
            } else {
                // Directly put the file(s) on the form instance.
                this.form.$put(this.field, input[0]);
            }

            if(!this.filepond) {
                this.updateFilenames();
            }
        },

        updateFilenames() {
            // Clear the filenames array and loop through the files
            // to add their filesnames to the array.
            this.filenames = [];

            const currentFiles = this.form[this.field];

            if(this.multiple) {
                currentFiles.forEach((file) => {
                    this.filenames.push(file.name);
                });
            } else if(currentFiles) {
                this.filenames.push(currentFiles.name);
            }
        },

        handleFileInput($event) {
            this.form.$put(this.field, this.multiple ? [] : null);

            const input = Object.values($event.target.files);

            this.addFiles(input);
        },
    }
};
</script>
