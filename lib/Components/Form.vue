<script>
import { hasFiles, objectToFormData } from "./FormHelpers.js";
import { Splade } from "../Splade.js";
import get from "lodash-es/get";
import has from "lodash-es/has";
import isBoolean from "lodash-es/isBoolean";
import mapValues from "lodash-es/mapValues";
import set from "lodash-es/set";

export default {
    inject: ["stack"],

    props: {
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

        forceFormData: {
            type: Boolean,
            required: false,
            default: false,
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

        fields: {
            type: Array,
            required: false,
            default: () => {
                return [];
            }
        }
    },

    emits: ["success", "error"],

    data() {
        return {
            values: Object.assign({}, { ...this.default }),
            processing: false,
            wasSuccessful: false,
            recentlySuccessful: false,
            recentlySuccessfulTimeoutId: null
        };
    },

    computed: {
        $all() {
            return this.values;
        },

        rawErrors() {
            return Splade.validationErrors(this.stack);
        },

        errors() {
            return mapValues(this.rawErrors, (errors) => {
                return errors.join("\n");
            });
        },
    },

    beforeMount() {
        this.fields.forEach((field) => {
            this.$put(field.name, get(this.values, field.name, field.array ? [] : null));
        });
    },

    methods: {
        hasError(key) {
            return has(this.errors, key);
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

        submit() {
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

        request() {
            this.processing = true;
            this.wasSuccessful = false;
            this.recentlySuccessful = false;
            clearTimeout(this.recentlySuccessfulTimeoutId);

            const data =
                this.forceFormData || hasFiles(this.values)
                    ? objectToFormData(this.values)
                    : this.values;

            Splade.request(this.action, this.method.toUpperCase(), data, {
                Accept: "application/json",
            })
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
                .catch((error) => {
                    this.processing = false;
                    this.$emit("error", error);
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