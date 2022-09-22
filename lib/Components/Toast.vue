<script>
import { TransitionRoot, TransitionChild } from "@headlessui/vue";

export default {
    props: {
        toastKey: {
            type: Number,
            required: true,
        },
        autoDismiss: {
            type: Number,
            required: false,
            default: 0,
        },
    },

    emits: ["dismiss"],

    data() {
        return {
            show: true,
        };
    },

    mounted() {
        if (this.autoDismiss) {
            setTimeout(() => {
                this.setShow(false);
            }, this.autoDismiss * 1000);
        }
    },

    methods: {
        setShow(value) {
            this.show = value;
        },

        emitDismiss() {
            this.$emit("dismiss");
        },
    },

    render() {
        return this.$slots.default({
            key: this.toastKey,
            show: this.show,
            setShow: this.setShow,
            emitDismiss: this.emitDismiss,

            // These HeadlessUI exports will be removed in v1.0
            TransitionRoot,
            TransitionChild,
        });
    },
};
</script>