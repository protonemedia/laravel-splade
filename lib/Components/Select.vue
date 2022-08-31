<template>
  <div ref="select">
    <slot />
  </div>
</template>

<script>
import find from "lodash-es/find";

export default {
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
        };
    },

    computed: {
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

    beforeUnmount(){
        if(this.choices && this.choicesInstance){
            this.choicesInstance.destroy();
        }
    },

    methods: {
        setValueOnChoices(value) {
            if (Array.isArray(value)) {
                this.choicesInstance.removeActiveItems();
            }

            if (value === null) {
                value = "";
            }

            this.choicesInstance.setChoiceByValue(value);
            this.updateHasSelectionAttribute();
            this.handlePlaceholderVisibility();
        },

        getItemOfCurrentModel() {
            const currentModel = this.modelValue;

            return find(this.choicesInstance._store.choices, (item) => {
                return item.value == currentModel;
            });
        },

        // show/hide placeholder when there is/isn't a selection...
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

        initChoices(selectElement) {
            const totalItems = Array.from(
                selectElement.querySelectorAll("option:not([placeholder])")
            ).length;

            const vm = this;

            import("choices.js").then((Choices) => {
                const options = Object.assign({}, this.choices, this.jsChoicesOptions);

                vm.choicesInstance = new Choices.default(selectElement, options);

                this.choicesInstance.containerInner.element.setAttribute(
                    "data-select-name",
                    selectElement.name
                );

                this.handlePlaceholderVisibility();
                this.updateHasSelectionAttribute();

                selectElement.addEventListener("change", function () {
                    vm.$emit("update:modelValue", vm.choicesInstance.getValue(true));

                    // hide dropdown if there are no more items to choose from...
                    if (!vm.multiple || totalItems < 1) {
                        return;
                    }

                    const selectedItems = vm.choicesInstance.getValue().length;

                    if (selectedItems >= totalItems) {
                        vm.choicesInstance.hideDropdown();
                    }
                });

                // scroll to the selected item...
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

        updateHasSelectionAttribute() {
            this.choicesInstance.containerInner.element.setAttribute(
                "data-has-selection",
                this.hasSelection
            );
        },
    }
};
</script>