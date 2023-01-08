<script>
import { objectToFormData } from "./FormHelpers.js";
import { Splade } from "../Splade.js";
import find from "lodash-es/find";
import get from "lodash-es/get";
import has from "lodash-es/has";
import isArray from "lodash-es/isArray";
import isBoolean from "lodash-es/isBoolean";
import mapValues from "lodash-es/mapValues";
import set from "lodash-es/set";
import startsWith from "lodash-es/startsWith";

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
        },

        submitOnChange: {
            type: [Boolean, Array],
            required: false,
            default: false
        },

        escapeValidationMessages: {
            type: Boolean,
            required: false,
            default: true
        },

        preserveScroll: {
            type: Boolean,
            required: false,
            default: false
        }
    },

    emits: ["success", "error"],

    data() {
        return {
            isMounted: false,
            missingAttributes: [],
            values: Object.assign({}, { ...this.default }),
            processing: false,
            wasSuccessful: false,
            recentlySuccessful: false,
            recentlySuccessfulTimeoutId: null,
            formElement: null,
            elementsUploading: [],
            fileponds: {},
        };
    },

    computed: {
        $all() {
            return this.values;
        },

        $uploading() {
            return this.elementsUploading.length > 0;
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

        // Create watchers
        if(this.submitOnChange === true) {
            this.$watch("values", () => {
                this.$nextTick(() => this.request());
            }, { deep: true });
        }else if(isArray(this.submitOnChange)) {
            this.submitOnChange.forEach((key) => {
                this.$watch(`values.${key}`, () => {
                    this.$nextTick(() => this.request());
                }, { deep: true });
            });
        }

        this.isMounted = true;

        const autofocusElement = this.formElement.querySelector("[autofocus]");

        if(autofocusElement) {
            this.focusAndScrollToElement(autofocusElement);
        }
    },

    methods: {
        $startUploading(eventData) {
            this.elementsUploading.push(eventData[0]);
        },

        $stopUploading(eventData) {
            this.elementsUploading = this.elementsUploading.filter(id => id != eventData[0]);
        },

        hasError(key) {
            return key in this.errors;
        },

        $registerFilepond(field, addFile, addFiles) {
            this.fileponds[field] = {
                addFile,
                addFiles
            };
        },

        $addFile(field, file) {
            if(!this.fileponds[field]) {
                return console.log("Filepond instance not found");
            }

            this.fileponds[field].addFile(file);
        },

        $addFiles(field, files) {
            if(!this.fileponds[field]) {
                return console.log("Filepond instance not found");
            }

            this.fileponds[field].addFiles(files);
        },

        $errorAttributes(key) {
            return {
                [this.escapeValidationMessages ? "textContent" : "innerHTML"]: this.errors[key]
            };
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

        focusAndScrollToElement(element) {
            let shouldFocus = true;

            if(element._flatpickr) {
                shouldFocus = false;
            }

            if(element.tagName === "SELECT" && element.getAttribute("data-choice")) {
                shouldFocus = false;
            }

            if(shouldFocus) {
                const intersectionObserver = new IntersectionObserver((entries) => {
                    let [entry] = entries;

                    if (entry.isIntersecting) {
                        setTimeout(() => entry.target.focus(), 150);
                        intersectionObserver.disconnect();
                    }
                });

                intersectionObserver.observe(element);
            }

            element.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest"
            });
        },

        /*
         * If a confirmation is needed, it first shows the
         * confirmation dialog and waits for the promise
         * before it performs the request.
         */
        submit($event) {
            if(this.$uploading) {
                return;
            }

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
            if(this.$uploading) {
                return;
            }

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

            if(this.preserveScroll) {
                headers["X-Splade-Preserve-Scroll"] = true;
            }

            let method = this.method.toUpperCase();

            if(method !== "GET" && method !== "POST") {
                data.append("_method", method);
                method = "POST";
            }

            Splade.request(this.action, method, data, headers)
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

                    const elementWithError = find(Object.keys(this.errors), (errorKey) => {
                        return this.formElement.querySelector(`[data-validation-key="${errorKey}"]`);
                    });

                    if(elementWithError) {
                        this.focusAndScrollToElement(
                            this.formElement.querySelector(`[data-validation-key="${elementWithError}"]`)
                        );
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
                            "$startUploading",
                            "$stopUploading",
                            "$processing",
                            "$uploading",
                            "$errorAttributes",
                            "$registerFilepond",
                            "$addFile",
                            "$addFiles",
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

                        if(startsWith(name, "__v_")) {
                            return self[name];
                        }

                        // If the data does not have the requested name, we add it to
                        // the missingAttributes array, and when the component is
                        // mounted, it'll try to find sensible defaults.
                        if (!self.isMounted && !has(self.values, name)) {
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
    }
};
</script>