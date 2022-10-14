<template>
  <OnClickOutside
    :style="wrapperStyle"
    :do="hide"
    :opened="opened"
    :ignore-inner-targets="!closeOnClick"
  >
    <div
      ref="button"
      :style="buttonStyle"
    >
      <slot
        name="button"
        :toggle="toggle"
        :disabled="disabled"
      />
    </div>

    <div
      ref="tooltip"
    >
      <slot
        :hide="hide"
        :opened="opened"
      />
    </div>
  </OnClickOutside>
</template>

<script>
import OnClickOutside from "./../Components/OnClickOutside.vue";
import { createPopper } from "@popperjs/core/lib/popper-lite";
import preventOverflow from "@popperjs/core/lib/modifiers/preventOverflow";
import flip from "@popperjs/core/lib/modifiers/flip";
import { nextTick } from "vue";

export default {
    components: {
        OnClickOutside,
    },

    props: {
        spladeId: {
            type: String,
            required: true,
        },

        placement: {
            type: String,
            default: "bottom-start",
            required: false,
        },

        strategy: {
            type: String,
            default: "absolute",
            required: false,
        },

        inline: {
            type: Boolean,
            default: false,
            required: false,
        },

        disabled: {
            type: Boolean,
            default: false,
            required: false,
        },

        teleport: {
            type: Boolean,
            default: false,
            required: false,
        },

        closeOnClick: {
            type: Boolean,
            default: false,
            required: false,
        },
    },

    data() {
        return {
            opened: false,
            popper: null,
        };
    },

    computed: {
        buttonStyle() {
            return this.inline ? { display: "inline" } : {};
        },

        wrapperStyle() {
            const style = { position: "relative" };

            if(this.inline) {
                style.display = "inline";
            }

            return style;
        }
    },

    watch: {
        opened() {
            this.popper.update();
        },
    },

    mounted: async function () {
        if(this.teleport) {
            // Wait for the Teleport to render...
            await nextTick();
        }

        const tooltip = this.teleport
            ? document.querySelector(`div[data-splade-dropdown-id="${this.spladeId}"]`)
            : this.$refs.tooltip.children[0];

        this.popper = createPopper(this.$refs.button, tooltip, {
            placement: this.placement,
            modifiers: [flip, preventOverflow],
            strategy: this.strategy,
        });
    },

    methods: {
        toggle() {
            this.opened = !this.opened;
        },

        hide() {
            this.opened = false;
        },
    },
};
</script>