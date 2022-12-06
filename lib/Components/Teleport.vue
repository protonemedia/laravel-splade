<template>
  <component
    :is="isMounted ? Teleport : 'div'"
    v-show="isMounted"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script>
import { Teleport } from "vue";

export default {
    inheritAttrs: false,

    data() {
        return {
            isMounted: false,
            Teleport
        };
    },

    /*
     * Only render the Teleport component after this component is mounted.
     * Otherwise, the target won't be available in the DOM yet.
     */
    mounted() {
        this.isMounted = true;
    },
};
</script>
