<template>
  <div ref="editor">
    <slot />
  </div>
</template>

<script>
import { Jodit } from "jodit";

export default {
    props: {
        editorOptions: {
            type: Object,
            required: false,
            default() {
                return {
                    textIcons: false,
                    uploader: {
                        insertImageAsBase64URI: true
                    },
                    toolbarButtonSize: "medium",
                    toolbarSticky: false,
                    iframe: false,
                    height: "auto",
                    minHeight: 400,
                    maxHeight: 600,
                    defaultMode: Jodit.MODE_WYSIWYG,
                    imageDefaultWidth: "100%",
                    observer: {
                        timeout: 100,
                    },
                    commandToHotkeys: {
                        //
                    },
                };
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

    computed: {
        editorConfig () {
            return { ...this.editorOptions };
        }

    },

    mounted() {
        this.element = this.$refs.editor.querySelector("textarea");

        this.editor = new Jodit(this.element, this.editorConfig);
        this.editor.value = this.modelValue;
        this.editor.events.on("change", newValue => this.$emit("update:modelValue", newValue));
    },
    beforeUnmount () {
        this.editor.destruct();
    }
};
</script>
