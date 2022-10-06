<script>
import { objectToFormData } from "./FormHelpers.js";
import { Splade } from "../Splade.js";
import first from "lodash-es/first";
import get from "lodash-es/get";
import has from "lodash-es/has";
import isBoolean from "lodash-es/isBoolean";
import mapValues from "lodash-es/mapValues";
import set from "lodash-es/set";

export default {
    inject: ["stack"],

    props: {
        spladeId: {
            type: String,
            required: true,
            default: ""
        },

        action: {
            type: String,
            required: false,
            default() {
                if(Splade.isSsr) {
                    return "";
                }

                return location.href;
            }
        },

        method: {
            type: String,
            required: false,
            default: "POST",
        },

        default: {
            type: Object,
            required: false,
            default: () => {
                return {};
            },
        },

        confirm: {
            type: [Boolean, String],
            required: false,
            default: false,
        },

        confirmText: {
            type: String,
            required: false,
            default: "",
        },

        confirmButton: {
            type: String,
            required: false,
            default: "",
        },

        cancelButton: {
            type: String,
            required: false,
            default: "",
        },

        stay: {
            type: Boolean,
            require: false,
            default: false
        },

        restoreOnSuccess: {
            type: Boolean,
            required: false,
            default: true,
        },

        resetOnSuccess: {
            type: Boolean,
            required: false,
            default: false,
        },

        scrollOnError: {
            type: Boolean,
            required: false,
            default: true
        }
    },

    emits: ["success", "error"],

    data() {
        return {
            missingAttributes: [],
            values: Object.assign({}, { ...this.default }),
            processing: false,
            wasSuccessful: false,
            recentlySuccessful: false,
            recentlySuccessfulTimeoutId: null,
            formElement: null,
        };
    },

    computed: {
        $all() {
            return this.values;
        },

        /*
         * Fetches the raw validation errors from the Splade
         * instances based on the current stack.
         */
        rawErrors() {
            return Splade.validationErrors(this.stack);
        },

        /*
         * Flattens the raw errors.
         */
        errors() {
            return mapValues(this.rawErrors, (errors) => {
                return errors.join("\n");
            });
        },
    },

    /*
     * It loops through all missing attributes and tries to
     * find a sensible default for that attribute.
     */
    mounted() {
        let formElement = document.querySelector(`form[data-splade-id="${this.spladeId}"]`);

        if(!formElement) {
            formElement = document;
        }

        this.formElement = formElement;

        this.missingAttributes.forEach((attribute) => {
            let defaultValue = "";

            const inputElement = formElement.querySelector(`[name="${attribute}"]`);

            if(inputElement) {
                defaultValue = inputElement.type === "checkbox" ? false : "";
            } else if(formElement.querySelector(`[name="${attribute}[]"]`)) {
                defaultValue = [];
            } else if(formElement.querySelector(`[name^="${attribute}."]`) || formElement.querySelector(`[name^="${attribute}["]`)) {
                defaultValue = {};
            }

            this.$put(attribute, defaultValue);
        });

        this.missingAttributes = [];
    },

    methods: {
        hasError(key) {
            return key in this.errors;
        },

        reset() {
            this.values = {};
        },

        restore() {
            this.values = Object.assign({}, { ...this.default });
        },

        $put(key, value) {
            return set(this.values, key, value);
        },

        /*
         * If a confirmation is needed, it first shows the
         * confirmation dialog and waits for the promise
         * before it performs the request.
         */
        submit($event) {
            if($event) {
                const submitter = $event.submitter;

                // A submit button can have a name and value.
                if(submitter && submitter.name) {
                    this.$put(submitter.name, submitter.value);
                }
            }

            if (!this.confirm) {
                return this.request();
            }

            Splade.confirm(
                isBoolean(this.confirm) ? "" : this.confirm,
                this.confirmText,
                this.confirmButton,
                this.cancelButton
            )
                .then(() => {
                    this.request();
                })
                .catch(() => {});
        },

        /*
         * Maps the values into a FormData instance and then
         * performs an async request.
         */
        async request() {
            await this.$nextTick();

            this.processing = true;
            this.wasSuccessful = false;
            this.recentlySuccessful = false;
            clearTimeout(this.recentlySuccessfulTimeoutId);

            const data = (this.values instanceof FormData)
                ? this.values
                : objectToFormData(this.values);

            const headers = { Accept: "application/json" };

            if(this.stay) {
                headers["X-Splade-Prevent-Refresh"] = true;
            }

            Splade.request(this.action, this.method.toUpperCase(), data, headers)
                .then((response) => {
                    this.$emit("success", response);

                    if (this.restoreOnSuccess) {
                        this.restore();
                    }

                    if (this.resetOnSuccess) {
                        this.reset();
                    }

                    this.processing = false;
                    this.wasSuccessful = true;
                    this.recentlySuccessful = true;
                    this.recentlySuccessfulTimeoutId = setTimeout(() => this.recentlySuccessful = false, 2000);
                })
                .catch(async (error) => {
                    this.processing = false;
                    this.$emit("error", error);

                    if(!this.scrollOnError) {
                        return;
                    }

                    // Wait for the error messages to render.
                    await this.$nextTick();

                    const elementWithError = first(Object.keys(this.errors), (errorKey) => {
                        return this.formElement.querySelector(`[data-validation-key="${errorKey}"]`);
                    });

                    if(elementWithError) {
                        this.formElement.querySelector(`[data-validation-key="${elementWithError}"]`).scrollIntoView({
                            behavior: "smooth",
                            block: "end",
                            inline: "nearest"
                        });
                    }
                });
        },
    },

    render() {
        const self = this;

        return this.$slots.default(
            new Proxy(
                {},
                {
                    ownKeys() {
                        return Object.keys(self.values);
                    },
                    get(target, name) {
                        const preservedKeys = [
                            "$all",
                            "$attrs",
                            "$put",
                            "errors",
                            "restore",
                            "reset",
                            "hasError",
                            "processing",
                            "rawErrors",
                            "submit",
                            "wasSuccessful",
                            "recentlySuccessful",
                        ];

                        if (preservedKeys.includes(name)) {
                            return self[name];
                        }

                        // If the data does not have the requested name, we add it to
                        // the missingAttributes array, and when the component is
                        // mounted, it'll try to find sensible defaults.
                        if (!has(self.values, name)) {
                            self.missingAttributes.push(name);
                            self.$put(name, "");
                        }

                        return get(self.values, name);
                    },

                    set(target, name, value) {
                        return self.$put(name, value);
                    },
                }
            )
        );
    },
};
</script>