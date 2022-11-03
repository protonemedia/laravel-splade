<template>
  <div ref="file">
    <slot
      :handle-file-input="handleFileInput"
      :filenames="filenames"
      :filepond="filepondComponent"
      :filepond-files="filepondFiles"
      :add-filepond-file="addFilepondFile"
    />
  </div>
</template>

<script>
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

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
        }
    },

    data() {
        return {
            filepondComponent: null,
            filepondFiles: [],
            filenames: []
        };
    },

    mounted(){
        if(this.filepond !== false) {
            this.initFilepond();
        }
    },

    methods: {
        addFilepondFile(error, file){
            if(error) {
                return;
            }

            console.log(file);
            this.form.$put(this.field, file.file);

            // Clear the filenames array and loop through the files
            // to add their filesnames to the array.
            this.filenames = [];

            this.filenames.push(file.file.name);
        },

        initFilepond(){
            import("vue-filepond").then((vueFilePond) => {
                this.filepondComponent = vueFilePond.default(
                    FilePondPluginFileValidateType,
                    FilePondPluginImagePreview
                );
            });
        },

        handleFileInput($event) {
            const input = Object.values($event.target.files);

            // Directly put the file(s) on the form instance.
            this.form.$put(this.field, this.multiple ? input : input[0]);

            // Clear the filenames array and loop through the files
            // to add their filesnames to the array.
            this.filenames = [];

            input.forEach((file) => {
                this.filenames.push(file.name);
            });
        },
    }
};
</script>
