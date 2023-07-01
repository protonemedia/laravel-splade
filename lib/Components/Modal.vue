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
        };
    },

    props: {
        closeButton: {
            type: Boolean,
            required: false,
            default: true
        },

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
            required: false,
            default: false
        },

        maxWidth: {
            type: String,
            required: false,
            default: (props) => {
                return props.type === "modal" ? "2xl" : "md";
            },
        },

        position: {
            type: String,
            required: false,
            default: (props) => {
                return props.type === "modal" ? "center" : "right";
            },
        },

        name: {
            type: String,
            required: false,
            default: null,
        },

        animate: {
            type: Boolean,
            required: false,
            default: true,
        },
    },

    emits: ["close"],

    data() {
        return {
            staticAnimate: true,
            isOpen: false,
        };
    },

    mounted() {
        this.staticAnimate = this.animate;

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
            if(!value) {
                this.staticAnimate = true;
            }

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
            closeButton: this.closeButton,
            animate: this.staticAnimate,
            position: this.position,

            // These HeadlessUI exports will be removed in v1.0
            Dialog,
            DialogPanel,
            TransitionRoot,
            TransitionChild,
        });
    },
};
</script>
