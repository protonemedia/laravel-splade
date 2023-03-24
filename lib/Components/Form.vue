<script>
import { objectToFormData } from "./FormHelpers.js";
import { Splade } from "../Splade.js";
import debounce from "lodash-es/debounce";
import find from "lodash-es/find";
import get from "lodash-es/get";
import has from "lodash-es/has";
import isArray from "lodash-es/isArray";
import isBoolean from "lodash-es/isBoolean";
import isString from "lodash-es/isString";
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

        confirmDanger: {
            type: [Boolean, String],
            required: false,
            default: false,
        },

        confirm: {
            type: [Boolean, String],
            required: false,
            default: (props) => {
                return props.confirmDanger;
            },
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

        requirePasswordOnce: {
            type: Boolean,
            required: false,
            default: false,
        },

        requirePassword: {
            type: [Boolean, String],
            required: false,
            default: (props) => {
                return props.requirePasswordOnce;
            },
        },

        background: {
            type: Boolean,
            required: false,
            default: false
        },

        stay: {
            type: Boolean,
            require: false,
            default: false,
        },

        restoreOnSuccess: {
            type: Boolean,
            required: false,
            default: false,
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

        keepModal: {
            type: Boolean,
            required: false,
            default: false,
        },

        preserveScroll: {
            type: Boolean,
            required: false,
            default: false
        },

        debounce: {
            type: Number,
            required: false,
            default: 0
        },

        acceptHeader: {
            type: String,
            required: false,
            default: "application/json",
        },

        headers: {
            type: Object,
            required: false,
            default: () => {
                return {};
            },
        },
    },

    emits: ["success", "error", "reset", "restored"],

    data() {
        return {
            isMounted: false,
            missingAttributes: [],
            values: Object.assign({}, { ...this.default }),
            processing: false,
            processingInBackground: false,
            wasSuccessful: false,
            recentlySuccessful: false,
            recentlySuccessfulTimeoutId: null,
            wasUnsuccessful: false,
            recentlyUnsuccessful: false,
            recentlyUnsuccessfulTimeoutId: null,
            formElement: null,
            elementsUploading: [],
            fileponds: {},
            debounceFunction: null,
            response: null,
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

    created() {
        this.debounceFunction = debounce(() => {
            this.request(this.background);
        }, this.debounce);
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
                if(this.background) {
                    this.processingInBackground = true;
                }

                this.$nextTick(() => this.debounce ? this.debounceFunction() : this.request(this.background));
            }, { deep: true });
        }else if(isArray(this.submitOnChange)) {
            this.submitOnChange.forEach((key) => {
                this.$watch(`values.${key}`, () => {
                    if(this.background) {
                        this.processingInBackground = true;
                    }

                    this.$nextTick(() => this.debounce ? this.debounceFunction() : this.request(this.background));
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

        $fileAsUrl(key) {
            const file = this.values[key];

            if(!file) {
                return "";
            }

            var url = URL.createObjectURL(file);
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, false);
            xhr.overrideMimeType("text/plain; charset=x-user-defined");
            xhr.send();
            URL.revokeObjectURL(url);

            var returnText = "";

            for (var i = 0; i < xhr.responseText.length; i++) {
                returnText += String.fromCharCode(xhr.responseText.charCodeAt(i) & 0xff);
            }

            return "data:" + file.type + ";base64," + btoa(returnText);
        },

        $errorAttributes(key) {
            return {
                [this.escapeValidationMessages ? "textContent" : "innerHTML"]: this.errors[key]
            };
        },

        reset() {
            this.values = {};
            this.$emit("reset");
        },

        restore() {
            this.values = Object.assign({}, { ...this.default });
            this.$emit("restored");
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

                    if(entry.isIntersecting) {
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
                console.log("Not submitting because there are still files uploading");
                return;
            }

            if($event) {
                const submitter = $event.submitter;

                // A submit button can have a name and value.
                if(submitter && submitter.name) {
                    this.$put(submitter.name, submitter.value);
                }
            }

            if(!this.confirm) {
                return this.request();
            }

            Splade.confirm(
                isBoolean(this.confirm) ? "" : this.confirm,
                this.confirmText,
                this.confirmButton,
                this.cancelButton,
                this.requirePassword ? true : false,
                this.requirePasswordOnce,
                this.confirmDanger ? true : false
            )
                .then((password) => {
                    if(!this.requirePassword) {
                        this.request();
                        return;
                    }

                    if(this.method.toUpperCase() !== "GET" && password) {
                        this.$put(
                            isString(this.requirePassword) && this.requirePassword ? this.requirePassword : "password",
                            password
                        );
                    }

                    this.request();
                })
                .catch(() => {});
        },

        /*
         * Maps the values into a FormData instance and then
         * performs an async request.
         */
        async request(forceStay) {
            if(typeof forceStay === "undefined") {
                forceStay = false;
            }

            if(this.$uploading) {
                console.log("Not submitting because there are still files uploading");
                return;
            }

            await this.$nextTick();

            if(this.background) {
                this.processingInBackground = true;
            } else {
                this.processing = true;
            }

            this.response = null;

            this.wasSuccessful = false;
            this.recentlySuccessful = false;
            clearTimeout(this.recentlySuccessfulTimeoutId);

            this.wasUnsuccessful = false;
            this.recentlyUnsuccessful = false;
            clearTimeout(this.recentlyUnsuccessfulTimeoutId);

            const data = (this.values instanceof FormData)
                ? this.values
                : objectToFormData(this.values);

            const headers = {};

            if(this.acceptHeader) {
                headers.Accept = this.acceptHeader;
            }

            if(this.stay || forceStay) {
                headers["X-Splade-Prevent-Refresh"] = true;
            }

            if(this.preserveScroll) {
                headers["X-Splade-Preserve-Scroll"] = true;
            }

            if(this.stack > 0 && this.keepModal) {
                headers["X-Splade-Modal"] = Splade.stackType(this.stack);
                headers["X-Splade-Modal-Target"] = this.stack;
            }

            let method = this.method.toUpperCase();

            if(method !== "GET" && method !== "POST") {
                data.append("_method", method);
                method = "POST";
            }

            const successCallback = (response) => {
                this.$emit("success", response);

                if(this.restoreOnSuccess) {
                    this.restore();
                }

                if(this.resetOnSuccess) {
                    this.reset();
                }

                this.processing = false;
                this.processingInBackground = false;

                this.wasSuccessful = true;
                this.recentlySuccessful = true;
                this.recentlySuccessfulTimeoutId = setTimeout(() => this.recentlySuccessful = false, 2000);

                this.response = response.data;
            };

            if(this.action === "#") {
                return successCallback(Object.fromEntries(data));
            }

            Splade.request(this.action, method, data, { ...headers, ...this.headers })
                .then(successCallback)
                .catch(async (error) => {
                    this.processing = false;
                    this.processingInBackground = false;

                    this.wasUnsuccessful = true;
                    this.recentlyUnsuccessful = true;
                    this.recentlyUnsuccessfulTimeoutId = setTimeout(() => this.recentlyUnsuccessful = false, 2000);

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
                            "$uploading",
                            "$errorAttributes",
                            "$registerFilepond",
                            "$addFile",
                            "$addFiles",
                            "$fileAsUrl",
                            "$response",
                            "errors",
                            "restore",
                            "reset",
                            "hasError",
                            "processing",
                            "processingInBackground",
                            "rawErrors",
                            "submit",
                            "wasSuccessful",
                            "recentlySuccessful",
                            "wasUnsuccessful",
                            "recentlyUnsuccessful",
                        ];

                        if(name === "$response") {
                            return self.response;
                        }

                        if(preservedKeys.includes(name)) {
                            return self[name];
                        }

                        if(startsWith(name, "__v_")) {
                            return self[name];
                        }

                        // If the data does not have the requested name, we add it to
                        // the missingAttributes array, and when the component is
                        // mounted, it'll try to find sensible defaults.
                        if(!self.isMounted && !has(self.values, name)) {
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