<template>
  <div ref="file">
    <slot
      :handle-file-input="handleFileInput"
      :filenames="filenames"
    />
  </div>
</template>

<script>
export default {
    props:{
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
        }
    },

    data() {
        return {
            filenames: []
        };
    },

    methods: {
        handleFileInput($event) {
            const input = Object.values($event.target.files);

            this.form.$put(this.field, this.multiple ? input : input[0]);

            this.filenames = [];

            input.forEach((file) => {
                this.filenames.push(file.name);
            });
        },
    },
};
</script>
