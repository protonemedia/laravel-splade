<template>
  <div ref="jodit">
    <slot />
  </div>
</template>

<script>
export default {
    props: {
        options: {
            type: Object,
            required: false,
            default() {
                return {};
            },
        },

        jsOptions: {
            type: Object,
            required: false,
            default: () => {
                return {};
            }
        },

        modelValue: {
            type: [String, Number],
            required: false
        },

        dusk: {
            type: String,
            required: false,
            default: null,
        },
    },

    emits: ["update:modelValue"],

    data() {
        return {
            instance: null,
        };
    },

    mounted() {
        const textareaElement = this.$refs.jodit.querySelector("textarea");

        import("jodit").then((Jodit) => {
            const options = Object.assign({ defaultMode: Jodit.default.Jodit.MODE_WYSIWYG }, this.options, this.jsOptions);

            this.instance = Jodit.default.Jodit.make(textareaElement, options);
            this.instance.value = this.modelValue;
            this.instance.events.on("change", newValue => this.$emit("update:modelValue", newValue));

            if(this.dusk) {
                this.instance.editor.setAttribute("dusk", this.dusk);
            }
        });
    },

    beforeUnmount () {
        this.instance.destruct();
    }
};
</script>
