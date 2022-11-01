<template>
  <div
    ref="select"
  >
    <slot :loading="loading" />
  </div>
</template>

<script>
import { default as Axios } from "axios";
import find from "lodash-es/find";
import forOwn from "lodash-es/forOwn";
import isArray from "lodash-es/isArray";
import isObject from "lodash-es/isObject";
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
            type: [Boolean, Object],
            required: false,
            default: false,
        },

        dusk: {
            type: String,
            required: false,
            default: null,
        },

        remoteUrl: {
            type: String,
            required: false,
            default: null,
        },

        remoteValue: {
            type: String,
            required: false,
            default: null,
        },

        remoteLabel: {
            type: String,
            required: false,
            default: null,
        },
    },

    emits: ["update:modelValue"],

    data() {
        return {
            choicesInstance: null,
            element: null,
            placeholderText: null,
            headlessListener: null,
            loading: false,
        };
    },

    computed: {
        /*
         * Returns a boolean whether a selection has been made.
         */
        hasSelection() {
            if (this.multiple) {
                return Array.isArray(this.modelValue) ? this.modelValue.length > 0 : false;
            }

            if (this.modelValue === null || this.modelValue === "" || this.modelValue === undefined) {
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
            if(!this.choicesInstance && this.multiple && isArray(updatedValue)) {
                // Filter out any blank values and set the model value when needed.
                const filteredValue = updatedValue.filter((value)=> {
                    return value !== "" && value !== null && value !== undefined;
                });

                if (JSON.stringify(filteredValue) != JSON.stringify(updatedValue)) {
                    this.$emit("update:modelValue", filteredValue);
                    return;
                }
            }

            if (this.choicesInstance) {
                if (JSON.stringify(updatedValue) == JSON.stringify(oldValue)) {
                    return;
                }

                this.setValueOnChoices(updatedValue);
            }
        },

        remoteUrl: {
            handler() {
                this.loadRemoteOptions();
            }
        }
    },

    mounted() {
        this.element = this.$refs.select.querySelector("select");

        if(this.choices) {
            this.initChoices(this.element);
        }

        this.loadRemoteOptions();
    },

    /*
     * Destroy the Choices.js instance to prevent memory leaks.
     */
    beforeUnmount() {
        this.destroyChoicesInstance();
    },

    methods: {
        loadRemoteOptions() {
            if(!this.remoteUrl) {
                return;
            }

            this.loading = true;

            Axios({
                url: this.remoteUrl,
                method: "GET",
                headers: {
                    Accept: "application/json",
                },
            })
                .then((response) => {
                    // Cleanup previous choices instance.
                    this.destroyChoicesInstance();

                    let options = [];

                    // Start with the the placeholder.
                    if(this.placeholder) {
                        options.push(this.placeholder);
                    }

                    // Normalize the response.
                    options = this.normalizeOptions(response.data, options);

                    this.loading = false;

                    var index;
                    var currentOptionsCount = this.element.options.length - 1;

                    for(index = currentOptionsCount; index >= 0; index--) {
                        // Remove all current options.
                        this.element.remove(index);
                    }

                    let hasSelectedOption = false;

                    forOwn(options, (option) => {
                        // Add the new options.
                        var optionElement = document.createElement("option");

                        optionElement.value = option.value;
                        optionElement.text = option.label;

                        if(option.value === this.modelValue) {
                            // The current value is in the new options, we use this later on
                            // to set the value on the select element and Choices instance.
                            hasSelectedOption = true;
                        }

                        if(option.disabled) {
                            optionElement.disabled = option.disabled;
                        }

                        if(option.placeholder) {
                            optionElement.placeholder = option.placeholder;
                        }

                        // Add the option to the select element.
                        this.element.appendChild(optionElement);
                    });

                    if(!hasSelectedOption) {
                        // The current value is not in the new options, we set the value to null.
                        this.$emit("update:modelValue", "");
                    }

                    if(this.choices) {
                        // Re-initialize the Choices instance.
                        this.initChoices(this.element);
                    } else {
                        if(hasSelectedOption) {
                            // The current value is in the new options, we set the value on the select element.
                            this.element.value = this.modelValue;
                        } else {
                            // The current value is not in the new options, we set the value to null.
                            this.$nextTick(() => {
                                this.element.selectedIndex = 0;
                            });
                        }
                    }
                })
                .catch(() => {
                    this.loading = false;
                });
        },

        destroyChoicesInstance() {
            if(this.choices && this.choicesInstance) {
                if(this.headlessListener) {
                    document.querySelector("#headlessui-portal-root")?.removeEventListener("click", this.headlessListener);
                }

                this.choicesInstance.destroy();
                this.choicesInstance = null;
            }
        },

        normalizeOptions(data, results) {
            const dataIsArray = isArray(data);

            if(!dataIsArray && isObject(data)) {
                if(this.remoteValue && this.remoteLabel) {
                    results.push({
                        value: data[this.remoteValue],
                        label: data[this.remoteLabel]
                    });
                } else {
                    forOwn(data, (label, value) => {
                        results.push({ label, value });
                    });
                }
            }
            else if(dataIsArray) {
                data.forEach((element) => {
                    this.normalizeOptions(element, results);
                });
            }

            return results;
        },

        /*
         * Set the given value on the Choices.js instance.
         */
        setValueOnChoices(value) {
            if (Array.isArray(value)) {
                // Choices.js doesn't like numeric values.
                value = map(value, (value) => `${value}`);

                this.choicesInstance.removeActiveItems();
            }

            if (value === null || value === undefined) {
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
            if(!this.multiple) {
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
                    selectElement.removeAttribute("dusk");
                }

                if(this.dusk) {
                    this.choicesInstance.containerInner.element.setAttribute("dusk", this.dusk);
                }

                this.handlePlaceholderVisibility();
                this.updateHasSelectionAttribute();

                // Listen for changes so we can update the Vue model of this component.
                selectElement.addEventListener("change", function () {
                    let currentValue = vm.choicesInstance.getValue(true);

                    if(currentValue === null || currentValue === undefined) {
                        currentValue = "";
                    }

                    vm.$emit("update:modelValue", currentValue);

                    // Hide dropdown if there are no more items to choose from.
                    if (!vm.multiple || totalItems < 1) {
                        return;
                    }

                    const selectedItems = vm.choicesInstance.getValue().length;

                    if (selectedItems >= totalItems) {
                        vm.choicesInstance.hideDropdown();
                    }
                });

                this.choicesInstance.containerInner.element.addEventListener("hideDropdownFromDusk", function () {
                    vm.choicesInstance.hideDropdown();
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