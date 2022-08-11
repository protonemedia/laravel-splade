<template>
  <OnClickOutside :do="hide">
    <button ref="button">
      <slot
        name="button"
        :toggle="toggle"
      />
    </button>

    <div
      v-show="opened"
      ref="tooltip"
    >
      <slot
        :hide="hide"
      />
    </div>
  </OnClickOutside>
</template>

<script>
import OnClickOutside from "./../Components/OnClickOutside.vue";
import { createPopper } from "@popperjs/core/lib/popper-lite";
import preventOverflow from "@popperjs/core/lib/modifiers/preventOverflow";
import flip from "@popperjs/core/lib/modifiers/flip";

export default {
    components: {
        OnClickOutside,
    },

    props: {
        placement: {
            type: String,
            default: "bottom-start",
            required: false,
        },
        active: {
            type: Boolean,
            default: false,
            required: false,
        },
        disabled: {
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

    watch: {
        opened() {
            this.popper.update();
        },
    },

    mounted() {
        this.popper = createPopper(this.$refs.button, this.$refs.tooltip.children[0], {
            placement: this.placement,
            modifiers: [flip, preventOverflow],
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