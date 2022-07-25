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
            type: String,
            default: null,
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
            values: {},
        };
    },

    mounted() {
        if (this.remember) {
            let restoredData = Splade.restore(this.remember, this.localStorage);

            if (!restoredData) {
                restoredData = {};
            }

            this.values = Object.assign({}, { ...this.default, ...restoredData });
        } else {
            this.values = Object.assign({}, { ...this.default });
        }
    },

    updated() {
        if (this.remember) {
            Splade.remember(this.remember, { ...this.values }, this.localStorage);
        }
    },

    render() {
        const self = this;

        return this.$slots.default(
            new Proxy(this.values, {
                ownKeys() {
                    return Object.keys(self.values)
                },
                get(target, name) {
                    return get(self.values, name);
                },
                set(target, name, value) {
                    set(self.values, name, value);
                },
            })
        );
    },
};
</script>