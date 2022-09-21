<script>
import { Dialog, DialogPanel } from "@headlessui/vue";

export default {
    render() {
        return this.$slots.default({
            Dialog,
            DialogPanel,
        });
    },
};
</script>
