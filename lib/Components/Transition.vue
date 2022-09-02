<script>
import { TransitionRoot, TransitionChild } from "@headlessui/vue";

export default {
    render() {
        return this.$slots.default({
            TransitionRoot,
            TransitionChild,
        });
    },
};
</script>
