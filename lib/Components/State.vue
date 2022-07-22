<script>
import { Splade } from "../Splade.js";
import has from "lodash-es/has"
import mapValues from "lodash-es/mapValues"

export default {
    inject: ["stack"],

    render() {
        const rawErrors = Splade.validationErrors(this.stack);
        const flash = Splade.flashData(this.stack);
        const shared = Splade.sharedData;

        const errors = mapValues(rawErrors, (errors) => {
            return errors.join("\n");
        });

        return this.$slots.default({
            flash,
            errors,
            rawErrors,
            shared,
            hasError(key) {
                return has(rawErrors, key)
            },
            hasFlash(key) {
                return has(flash, key)
            },
            hasShared(key) {
                return has(shared, key)
            },
            hasErrors: Object.keys(rawErrors).length > 0,
        });
    },
};
</script>