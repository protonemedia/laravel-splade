<script>
import { Splade } from "../Splade.js";
import has from "lodash-es/has";
import first from "lodash-es/first";

export default {
    inject: ["stack"],

    computed: {
        values() {
            return Splade.validationErrors(this.stack);
        },
    },

    render() {
        const self = this;

        return this.$slots.default({
            has(key) {
                return has(self.values, key);
            },
            first(key) {
                return first(self.values[key] || []);
            },
            all: { ...this.values },
            ...this.values,
        });
    },
};
</script>