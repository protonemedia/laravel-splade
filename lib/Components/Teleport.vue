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
    data(){
        return{
            isMounted: false
        };
    },

    mounted() {
        this.isMounted = true;
    },
};
</script>
