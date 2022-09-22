<template>
  <Teleport
    v-if="isMounted"
    v-bind="$attrs"
  >
    <slot />
  </Teleport>
</template>

<script>
import { Teleport } from "vue";

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
