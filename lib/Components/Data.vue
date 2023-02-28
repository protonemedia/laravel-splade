<script>
import get from "lodash-es/get";
import set from "lodash-es/set";
import { Splade } from "../Splade.js";

export default {
    props: {
        default: {
            type: Object,
            default: () => {
                return {};
            },
            required: false,
        },

        remember: {
            type: [Boolean, String],
            default: false,
            required: false,
        },

        localStorage: {
            type: Boolean,
            default: false,
            required: false,
        },
    },

    data() {
        return {
            values: Object.assign({}, { ...this.default })
        };
    },

    beforeMount() {
        if (this.remember) {
            // Retrieve the stored data from the Splade instance.
            let restoredData = Splade.restore(this.remember, this.localStorage);

            if (!restoredData) {
                restoredData = {};
            }

            // Overwrite the default values with the restored data.
            this.values = Object.assign({}, { ...this.default, ...restoredData });
        }
    },

    updated() {
        if (this.remember) {
            // Save the values whenever the component is updated.
            Splade.remember(this.remember, { ...this.values }, this.localStorage);
        }
    },

    render() {
        const self = this;

        return this.$slots.default ? this.$slots.default(
            new Proxy(this.values, {
                ownKeys() {
                    return Object.keys(self.values);
                },
                get(target, name) {
                    return get(self.values, name);
                },
                set(target, name, value) {
                    set(self.values, name, value);
                },
            })
        ) : null;
    },
};
</script>