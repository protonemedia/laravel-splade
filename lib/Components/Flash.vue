<script>
import { Splade } from "../Splade.js";
import has from "lodash-es/has";

export default {
    inject: ["stack"],

    computed: {
        values() {
            return Splade.flashData(this.stack);
        },
    },

    render() {
        const self = this;

        return this.$slots.default({
            has(key) {
                return has(self.values, key);
            },
            ...this.values,
        });
    },
};
</script>