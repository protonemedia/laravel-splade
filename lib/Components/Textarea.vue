<template>
  <div ref="textarea">
    <slot />
  </div>
</template>

<script>
import { nextTick } from "vue";

export default {
    props: {
        autosize: {
            type: Boolean,
            required: false,
            default: false
        },

        modelValue: {
            type: [String, Number],
            required: false
        }
    },

    data() {
        return {
            autosizeInstance: null,
            element: null,
        };
    },

    watch: {
        modelValue() {
            if (!this.autosize || !this.autosizeInstance) {
                return;
            }

            import("autosize").then((autosize) => {
                // Force the Autosize instance to update the element.
                nextTick(() => autosize.default.update(this.element));
            });
        }
    },

    mounted() {
        this.element = this.$refs.textarea.querySelector("textarea");

        if(this.autosize) {
            import("autosize").then((autosize) => {
                this.autosizeInstance = autosize.default(this.element);
            });
        }
    },

    /*
     * Destroy the Autsize instance to prevent memory leaks.
     */
    beforeUnmount() {
        if(this.autosize && this.autosizeInstance) {
            import("autosize").then((autosize) => {
                autosize.default.destroy(this.element);
            });
        }
    }
};
</script>