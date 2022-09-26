<template>
  <Teleport
    v-if="isMounted"
    v-bind="$attrs"
  >
    <slot />
  </Teleport>
</template>

<script>
export default {
    data() {
        return {
            isMounted: false
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
