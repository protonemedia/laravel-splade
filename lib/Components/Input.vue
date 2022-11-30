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

        // We instantiate an observer to keep track of the element's 'disabled' status.
        this.observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if(mutation.attributeName === "disabled") {
                    vm.disabled = mutation.target.disabled;
                }
            });
        });

        this.observer.observe(this.element, { attributes: true });
    },

    /*
     * Destroy the observer and Flatpickr instance to prevent memory leaks.
     */
    beforeUnmount() {
        this.observer.disconnect();

        if (this.flatpickrInstance) {
            this.flatpickrInstance.destroy();
        }
    },

    methods: {
        initFlatpickr(element) {
            import("flatpickr").then((flatpickr) => {
                // Instantiate Flatpickr with the combined PHP and
                // JS options, and listen for changes so we can
                // update the Vue model of this component.
                this.flatpickrInstance = flatpickr.default(
                    element,
                    Object.assign({}, this.flatpickr, this.jsFlatpickrOptions, {
                        onChange: (selectedDates, newValue) => {
                            if(this.flatpickrInstance.config.mode === "range" && this.flatpickrInstance.selectedDates.length < 2) {
                                return;
                            }

                            if (newValue != this.modelValue) {
                                this.$emit("update:modelValue", newValue);
                            }
                        },
                    })
                );

                if (this.modelValue) {
                    // Set the initial value on the Flatpickr instance.
                    this.flatpickrInstance.setDate(this.modelValue);
                }
            });
        }
    }
};
</script>