<template>
  <div ref="input">
    <slot />
  </div>
</template>

<script>
export default {
    props: {
        flatpickr: {
            type: [Boolean, Object],
            required: false,
            default: false,
        },

        jsFlatpickrOptions: {
            type:  Object,
            required: false,
            default: () => {
                return {};
            },
        },

        modelValue: {
            type: String,
            required: false,
        },
    },

    emits: ["update:modelValue"],

    data() {
        return {
            element: null,
            flatpickrInstance: null,
        };
    },

    watch: {
        modelValue(updatedValue) {
            if (this.flatpickrInstance) {
                this.flatpickrInstance.setDate(updatedValue);
            }
        },
    },

    mounted() {
        this.element = this.$refs.input.querySelector("input");

        if (this.flatpickr) {
            this.initFlatpickr(this.element);
        }
    },

    beforeUnmount() {
        if (this.flatpickrInstance) {
            this.flatpickrInstance.destroy();
        }
    },

    methods:{
        initFlatpickr(element){
            import("flatpickr").then((flatpickr) =>{
                this.flatpickrInstance = flatpickr.default(
                    element,
                    Object.assign({}, this.flatpickr, this.jsFlatpickrOptions, {
                        onChange: (selectedDates, newValue) => {
                            if (newValue != this.modelValue) {
                                this.$emit("update:modelValue", newValue);
                            }
                        },
                    })
                );
            });
        }
    }
};
</script>