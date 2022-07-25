<script>
import {
    Dialog,
    DialogPanel,
    TransitionRoot,
    TransitionChild,
} from "@headlessui/vue";

export default {
    provide() {
        return {
            stack: this.stack
        }
    },

    props: {
        type: {
            type: String,
            required: true,
        },

        stack: {
            type: Number,
            required: true,
        },

        onTopOfStack: {
            type: Boolean,
            required: true,
        },

        maxWidth: {
            type: String,
            required: false,
            default: (props) => {
                return props.type === "modal" ? "2xl" : "md";
            },
        },
    },

    emits: ["close"],

    data() {
        return {
            isOpen: false,
        };
    },

    mounted() {
        this.setIsOpen(true);
    },

    methods: {
        emitClose() {
            this.$emit("close");
        },

        close() {
            this.setIsOpen(false);
        },

        setIsOpen(value) {
            this.isOpen = value;
        },
    },

    render() {
        return this.$slots.default({
            type: this.type,
            isOpen: this.isOpen,
            setIsOpen: this.setIsOpen,
            close: this.close,
            stack: this.stack,
            onTopOfStack: this.onTopOfStack,
            maxWidth: this.maxWidth,
            emitClose: this.emitClose,
            Dialog,
            DialogPanel,
            TransitionRoot,
            TransitionChild,
        });
    },
};
</script>
