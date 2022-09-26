<script>
import { Dialog, DialogPanel } from "@headlessui/vue";

export default {
    render() {
        /*
         * This is just a wrapper around the Headless UI components
         * so it's easy to use them in Blade templates.
         */
        return this.$slots.default({
            Dialog,
            DialogPanel,
        });
    },
};
</script>
