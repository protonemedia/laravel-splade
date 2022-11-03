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

        csrfToken: {
            type: String,
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
            filenames: []
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
                    oninitfile(file) {
                        console.log("oninitfile", file);
                    },
                    onaddfilestart(file) {
                        console.log("onaddfilestart", file);
                    },
                    onaddfile(error, file) {
                        if(!error && !vm.server) {
                            vm.addFiles([file.file]);
                        }
                    },
                    onremovefile(error, file) {
                        if(!error) {
                            vm.removeFile(file.file);
                        }
                    }
                };

                if(this.server) {
                    options.server = {

                        process: (fieldName, file, metadata, load, error, progress, abort, transfer, options) => {
                            // fieldName is the name of the input field
                            // file is the actual file object to send
                            const formData = new FormData();
                            formData.append("file", file, file.name);

                            Axios({
                                url: vm.server,
                                method: "POST",
                                data: formData,
                                onUploadProgress: e => {
                                    progress(e.lengthComputable, e.loaded, e.total);
                                    console.log(e);
                                },
                            })
                                .then((response) => {
                                    if (response.status >= 200 && response.status < 300) {
                                        load(response.data);
                                    } else {
                                        error("oh no");
                                    }
                                })
                                .catch(() => {
                                    error("oh no");
                                });


                            // // Should call the progress method to update the progress to 100% before calling load
                            // // Setting computable to false switches the loading indicator to infinite mode
                            // request.upload.onprogress = (e) => {
                            //     progress(e.lengthComputable, e.loaded, e.total);
                            // };

                            // // Should call the load method when done and pass the returned server file id
                            // // this server file id is then used later on when reverting or restoring a file
                            // // so your server knows which file to return without exposing that info to the client
                            // request.onload = function () {
                            //     if (request.status >= 200 && request.status < 300) {
                            //         // the load method accepts either a string (id) or an object
                            //         load(request.responseText);
                            //     } else {
                            //         // Can call the error method if something is wrong, should exit after
                            //         error("oh no");
                            //     }
                            // };

                            // request.send(formData);

                            // // Should expose an abort method so the request can be cancelled
                            // return {
                            //     abort: () => {
                            //         // This function is entered if the user has tapped the cancel button
                            //         request.abort();

                            //         // Let FilePond know the request has been cancelled
                            //         abort();
                            //     },
                            // };
                        },

                        revert: (uniqueFileId, load, error) => {

                        },
                    };
                }

                this.filepondInstance = filepond.create(this.inputElement, options);
            });
        },

        removeFile(file) {
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

            this.updateFilenames();
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
