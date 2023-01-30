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
import isArray from "lodash-es/isArray";
import isObject from "lodash-es/isObject";
import isString from "lodash-es/isString";

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

        existingSuffix: {
            type: String,
            required: false,
            default: "_existing"
        },

        orderSuffix: {
            type: String,
            required: false,
            default: "_order"
        },

        dusk: {
            type: String,
            required: false,
            default: null,
        },
    },

    emits: ["start-uploading", "stop-uploading"],

    data() {
        return {
            inputElement: null,
            filepondInstance: null,
            filenames: [],
            uploadedFiles: [],
            hadExistingFiles: false,
        };
    },

    computed: {
        existingField() {
            return this.field + this.existingSuffix;
        },

        orderField() {
            return this.field + this.orderSuffix;
        },

        handlesExistingFiles() {
            return this.existingSuffix && this.hadExistingFiles;
        }
    },

    mounted() {
        this.inputElement = this.$refs["file"].querySelector("input[type=\"file\"]");

        const boundValue = this.form[this.field];
        this.hadExistingFiles = (this.multiple && boundValue.length > 0) || (!this.multiple && boundValue);

        // Clear the form's field, so that we can use it to store the uploaded files.
        this.form.$put(this.field, this.multiple ? [] : null);

        if(this.filepond) {
            this.setExisting(boundValue);

            this.initFilepond(boundValue ? boundValue : []).then(() => {
                // We bind the filepond instance to the form, so that we can access it from the form.
                this.form.$registerFilepond(this.field, this.addFileToFilepond, this.addFilesToFilepond);
            });
        }
    },

    methods: {
        /*
         * This extracts the encrypted string from the backend data.
         */
        extractMetadataFromExistingFile(file) {
            if(!file) {
                return null;
            }

            if(isString(file)) {
                return file;
            }

            if(isArray(file)) {
                return file.map(this.extractMetadataFromExistingFile);
            }

            if(isObject(file)) {
                return file.options.metadata.metadata;
            }

            return null;
        },

        /**
         * This sets the existing files on the form.
         */
        setExisting(value) {
            if(!this.handlesExistingFiles) {
                return;
            }

            this.form.$put(this.existingField, this.extractMetadataFromExistingFile(value));

            this.setOrder();
        },

        /**
         * This determines the order of all files, existing and new, and sets it on the form.
         */
        setOrder() {
            if(!this.multiple) {
                return;
            }

            if(!this.handlesExistingFiles) {
                return;
            }

            if(!this.filepondInstance) {
                return;
            }

            const files = this.filepondInstance.getFiles();

            // New files don't have an identifier.
            const newFiles = files.filter(file => !file.getMetadata("identifier"));

            const order = this.filepondInstance.getFiles().map((file) => {
                const identifier = file.getMetadata("identifier");

                if(identifier) {
                    return "existing-file-" + identifier;
                }

                return "new-file-" + newFiles.indexOf(file);
            });

            this.form.$put(this.orderField, order);
        },

        /**
         * This is meant for external URLs.
         */
        addFileToFilepond(file) {
            if(file) {
                this.filepondInstance.addFile(file);
            }
        },

        addFilesToFilepond(files) {
            files.forEach(file => this.addFileToFilepond(file));
        },

        loadFilepondPlugins() {
            const plugins = [];

            if(this.preview) {
                plugins.push(import("filepond-plugin-image-exif-orientation"));
                plugins.push(import("filepond-plugin-image-preview"));
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

        initFilepond(files) {
            const originalName = this.inputElement.getAttribute("name");

            const vm = this;

            return new Promise(resolve => {
                import("filepond").then((filepond) => {
                    const options = Object.assign({}, vm.filepond, vm.jsFilepondOptions, {
                        oninit() {
                            const statusCheck = setInterval(() => {
                                if(vm.filepondInstance.status <= 2) {
                                    clearInterval(statusCheck);
                                } else {
                                    return;
                                }

                                vm.setOrder();

                                const fileInput = vm.filepondInstance.element.querySelector("input[type=\"file\"]");

                                if(!fileInput.hasAttribute("name")) {
                                    fileInput.setAttribute("name", originalName);
                                }

                                if(vm.dusk) {
                                    vm.filepondInstance.element.setAttribute("dusk", vm.dusk);
                                }

                                fileInput.setAttribute("data-server", vm.server ? true : false);

                                if(vm.multiple) {
                                    vm.filepondInstance.element.addEventListener("moveFile", function (event) {
                                        vm.filepondInstance.moveFile(event.detail[0], event.detail[1]);
                                        vm.setOrder();
                                    });
                                }

                                resolve();
                            }, 15);
                        },

                        onaddfile(error, file) {
                            if(error) {
                                return;
                            }

                            if(file.origin === filepond.FileOrigin.LOCAL) {
                                // This is an existing file, so we don't need to add or upload it.
                                return;
                            }

                            if(!vm.server) {
                                vm.addFiles([file.file]);
                            } else {
                                vm.$emit("start-uploading", [file.id]);
                            }

                            vm.setOrder();
                        },
                        onremovefile(error, file) {
                            if(error) {
                                return;
                            }

                            if(vm.handlesExistingFiles) {
                            // Remove the file from the existing files.
                                if(vm.multiple) {
                                    vm.setExisting(vm.form[vm.existingField].filter((existingFile) => {
                                        return file.getMetadata("metadata") !== existingFile;
                                    }));
                                } else {
                                    vm.setExisting(null);
                                }
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
                        onreorderfiles() {
                            vm.setOrder();
                        }
                    });

                    if(this.hadExistingFiles) {
                        options.files = this.multiple ? files : [files];
                    }

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

                    options.server = {
                        // This handles to loading of the file preview of existing files.
                        load: (source, load, error, progress, abort) => {
                            const loadCancelToken = Axios.CancelToken;
                            const loadCancelTokenSource = loadCancelToken.source();

                            Axios({
                                url: source.preview_url,
                                method: "GET",
                                cancelToken: loadCancelTokenSource.token,
                                responseType: "blob",
                            }).then((response) => {
                                const file = new File([response.data], source.name, { type: source.type });

                                load(file);
                            }).catch(function (thrown) {
                                if (!axios.isCancel(thrown)) {
                                    error(thrown);
                                }
                            });

                            return {
                                abort: () => {
                                    loadCancelTokenSource.cancel();
                                    abort();
                                },
                            };
                        }
                    };

                    if(this.server) {
                        options.server.process = (fieldName, file, metadata, load, error, progress, abort) => {
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
                        };

                        options.server.revert = (path, load, error) => {
                            Axios({
                                url: vm.server,
                                method: "POST",
                                data: { _method: "DELETE", file: path },
                            }).then(() => {
                                load();
                            }).catch(function (thrown) {
                                error(thrown.response?.statusText);
                            });
                        };
                    }

                    if(options.itemInsertLocation === "before" || options.itemInsertLocation === "after") {
                        options.itemInsertLocationFreedom = false;
                    }

                    this.loadFilepondPlugins(filepond).then((plugins) => {
                        if(plugins.length > 0) {
                            filepond.registerPlugin(...plugins.map(plugin => plugin.default));
                        }

                        this.filepondInstance = filepond.create(this.inputElement, options);
                    });
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
                this.setExisting(null);
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
