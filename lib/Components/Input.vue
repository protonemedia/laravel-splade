<template>
  <div ref="input">
    <slot :disabled="disabled" />
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
            type: [String, Number],
            required: false,
        },
    },

    emits: ["update:modelValue"],

    data() {
        return {
            disabled: false,
            element: null,
            flatpickrInstance: null,
            observer: null
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

        this.disabled = this.element.disabled;

        const vm = this;

        this.observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if(mutation.attributeName === "disabled") {
                    vm.disabled = mutation.target.disabled;
                }
            });
        });

        this.observer.observe(this.element, { attributes: true });
    },

    beforeUnmount() {
        this.observer.disconnect();

        if (this.flatpickrInstance) {
            this.flatpickrInstance.destroy();
        }
    },

    methods: {
        initFlatpickr(element){
            import("flatpickr").then((flatpickr) => {
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

                if (this.modelValue) {
                    this.flatpickrInstance.setDate(this.modelValue);
                }
            });
        }
    }
};
</script>