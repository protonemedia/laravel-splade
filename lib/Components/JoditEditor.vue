<template>
  <div ref="editor">
    <slot />
  </div>
</template>

<script>
import { Jodit } from "jodit";

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
        }
    },

    emits: ["update:modelValue"],

    data() {
        return {
            element: null,
        };
    },


    mounted() {
        this.element = this.$refs.editor.querySelector("textarea");

        const options = Object.assign({ defaultMode: Jodit.MODE_WYSIWYG }, this.options, this.jsOptions);

        this.editor = Jodit.make(this.element, options);
        this.editor.value = this.modelValue;
        this.editor.events.on("change", newValue => this.$emit("update:modelValue", newValue));
    },

    beforeUnmount () {
        this.editor.destruct();
    }
};
</script>
