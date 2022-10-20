<template>
  <div
    ref="select"
  >
    <slot />
  </div>
</template>

<script>
import find from "lodash-es/find";
import map from "lodash-es/map";

export default {
    inject: ["stack"],

    props: {
        choices: {
            type: [Boolean, Object],
            required: false,
            default: false
        },

        jsChoicesOptions: {
            type: Object,
            required: false,
            default: () => {
                return {};
            }
        },

        multiple: {
            type: Boolean,
            required: false,
            default: false
        },

        modelValue: {
            type: [String, Number, Array],
            required: false,
        },

        placeholder: {
            type: Boolean,
            required: false,
            default: false,
        },
    },

    emits: ["update:modelValue"],

    data(){
        return {
            choicesInstance: null,
            element: null,
            placeholderText: null,
            headlessListener: null
        };
    },

    computed: {
        /*
         * Returns a boolean whether a selection has been made.
         */
        hasSelection() {
            if (this.multiple) {
                return Array.isArray(this.model) ? this.model.length > 0 : false;
            }

            if (this.model === null || this.model === "") {
                return false;
            }

            return true;
        },
    },

    watch: {
        /*
         * When the model value changes, and it's a new
         * section, apply it to the Choices instance.
         */
        modelValue(updatedValue, oldValue) {
            if (this.choicesInstance) {
                if (JSON.stringify(updatedValue) == JSON.stringify(oldValue)) {
                    return;
                }

                this.setValueOnChoices(updatedValue);
            }
        },
    },

    mounted() {
        this.element = this.$refs.select.querySelector("select");

        if(this.choices) {
            this.initChoices(this.element);
        }
    },

    /*
     * Destroy the Choices.js instance to prevent memory leaks.
     */
    beforeUnmount() {
        if(this.choices && this.choicesInstance) {
            if(this.headlessListener) {
                document.querySelector("#headlessui-portal-root")?.removeEventListener("click", this.headlessListener);
            }

            this.choicesInstance.destroy();
        }
    },

    methods: {
        /*
         * Set the given value on the Choices.js instance.
         */
        setValueOnChoices(value) {
            if (Array.isArray(value)) {
                // Choices.js doesn't like numeric values.
                value = map(value, (value) => `${value}`);

                this.choicesInstance.removeActiveItems();
            }

            if (value === null) {
                value = "";
            }

            this.choicesInstance.setChoiceByValue(value);
            this.updateHasSelectionAttribute();
            this.handlePlaceholderVisibility();
        },

        /*
         * Returns the internal Choices.js item that is currently selected.
         */
        getItemOfCurrentModel() {
            const currentModel = this.modelValue;

            return find(this.choicesInstance._store.choices, (item) => {
                return item.value == currentModel;
            });
        },

        /*
         * This method handles the visibility of the placeholder
         * and applies some additional minor styling.
         */
        handlePlaceholderVisibility() {
            if(!this.multiple){
                return;
            }

            const placeholderElement = this.choicesInstance.containerInner.element.querySelector(
                "input.choices__input"
            );

            this.placeholderText = placeholderElement.placeholder
                ? placeholderElement.placeholder
                : this.placeholderText;

            const hasItems = this.choicesInstance.getValue().length;

            placeholderElement.placeholder = hasItems ? "" : (this.placeholderText ? this.placeholderText : "");
            placeholderElement.style.minWidth = "0";
            placeholderElement.style.width = hasItems ? "1px" : "auto";
            placeholderElement.style.paddingTop = hasItems ? "0px" : "1px";
            placeholderElement.style.paddingBottom = hasItems ? "0px" : "1px";
        },

        /*
         * Instantiate Choices.js with the combined PHP and JS options.
         */
        initChoices(selectElement) {
            const totalItems = Array.from(
                selectElement.querySelectorAll("option:not([placeholder])")
            ).length;

            const vm = this;

            import("choices.js").then((Choices) => {
                const options = Object.assign({}, this.choices, this.jsChoicesOptions);

                vm.choicesInstance = new Choices.default(selectElement, options);

                if(vm.stack > 0) {
                    // The Headless UI Dialog blocks the events on the Choices.js
                    // instance, so we put an event listener on the portal root.
                    vm.headlessListener = function(e) {
                        if(e.target === selectElement) {
                            vm.choicesInstance.showDropdown();
                        }
                    };

                    document.querySelector("#headlessui-portal-root")
                        .addEventListener("click", vm.headlessListener, { capture: true });
                }

                // Set the name of the select element on the Choices.js element
                // so we can perform test assertions with Laravel Dusk.
                this.choicesInstance.containerInner.element.setAttribute(
                    "data-select-name",
                    selectElement.name
                );

                if(selectElement.hasAttribute("dusk")) {
                    // Move the Dusk selector from the select element to the Choices.js element.
                    const duskSelector = selectElement.getAttribute("dusk");
                    selectElement.removeAttribute("dusk");
                    this.choicesInstance.containerInner.element.setAttribute("dusk", duskSelector);
                }

                this.handlePlaceholderVisibility();
                this.updateHasSelectionAttribute();


                // Listen for changes so we can update the Vue model of this component.
                selectElement.addEventListener("change", function () {
                    vm.$emit("update:modelValue", vm.choicesInstance.getValue(true));

                    // Hide dropdown if there are no more items to choose from.
                    if (!vm.multiple || totalItems < 1) {
                        return;
                    }

                    const selectedItems = vm.choicesInstance.getValue().length;

                    if (selectedItems >= totalItems) {
                        vm.choicesInstance.hideDropdown();
                    }
                });

                // Scroll to the selected item when the dropdown is shown.
                selectElement.addEventListener("showDropdown", function() {
                    if (vm.multiple || !vm.modelValue) {
                        return;
                    }

                    const item = vm.getItemOfCurrentModel();

                    const itemElement = vm.choicesInstance.dropdown.element.querySelector(
                        `.choices__item[data-id="${item.id}"]`
                    );

                    vm.choicesInstance.choiceList.scrollToChildElement(itemElement, 1);
                    vm.choicesInstance._highlightChoice(itemElement);
                });

                this.setValueOnChoices(this.modelValue);
            });
        },

        /*
         * Update the 'data-has-selection' attribute based on the current selection.
         */
        updateHasSelectionAttribute() {
            this.choicesInstance.containerInner.element.setAttribute(
                "data-has-selection",
                this.hasSelection
            );
        },
    }
};
</script>