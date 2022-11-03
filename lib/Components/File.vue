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

        server: {
            type: [Boolean, String],
            required: false,
            default: false,
        }
    },

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
        initFilepond() {
            const vm = this;

            import("filepond").then((filepond) => {
                const options = {
                    multiple: this.multiple,
                    name: "file",
                    onaddfile(error, file) {
                        console.log("onaddfile", error, file);
                        if(error) {
                            return;
                        }

                        if(!vm.server) {
                            vm.addFiles([file.file]);
                        }
                    },
                    onremovefile(error, file) {
                        console.log("onremovefile", error, file);

                        if(error) {
                            return;
                        }

                        vm.removeFile(file.file);
                    },
                    onprocessfile(error, file) {
                        console.log("onprocessfile", error, file);

                        if(error) {
                            return;
                        }

                        vm.uploadedFiles.push({
                            file: file.file,
                            id: file.serverId
                        });

                        vm.addFiles([file.serverId]);
                    },
                };

                if(this.server) {
                    options.server = {
                        process: (fieldName, file, metadata, load, error, progress, abort, transfer, options) => {
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

                this.filepondInstance = filepond.create(this.inputElement, options);
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
