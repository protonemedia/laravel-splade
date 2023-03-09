<script>
import get from "lodash-es/get";
import set from "lodash-es/set";
import { Splade } from "../Splade.js";

export default {
    props: {
        parsed: {
            type: Object,
            required: true
        },

        raw: {
            type: Object,
            required: true
        },

        remember: {
            type: Array,
            required: true
        },

        localStorage: {
            type: Array,
            required: true
        },
    },

    data() {
        return {
            stores: Object.assign({}, { ...this.parsed, ...this.raw }),
        };
    },

    beforeMount() {
        this.remember.forEach((store) => {
            let restoredData = Splade.restore(store, this.localStorage.includes(store));

            this.stores[store] = { ...this.stores[store], ...restoredData };
        });
    },

    updated() {
        this.remember.forEach((store) => {
            Splade.remember(store, { ...this.stores[store] }, this.localStorage.includes(store));
        });
    },

    render() {
        const self = this;

        return this.$slots.default ? this.$slots.default(
            new Proxy(this.stores, {
                ownKeys() {
                    return Object.keys(self.stores);
                },
                get(target, name) {
                    return get(self.stores, name);
                },
                set(target, name, value) {
                    set(self.stores, name, value);
                },
            })
        ) : null;
    },
};
</script>