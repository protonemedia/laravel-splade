<template>
  <component
    :is="$splade.isSsr ? 'div' : KeepAlive"
    :max="$spladeOptions.max_keep_alive"
  >
    <Render
      :key="keepAliveKey"
      :html="$splade.htmlForDynamicComponent(name)"
    />
  </component>
</template>

<script setup>
import { KeepAlive, inject } from "vue";
import Render from "./Render.vue";

defineProps({
    keepAliveKey: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },
});

const $splade = inject("$splade") || {};
const $spladeOptions = inject("$spladeOptions") || {};
</script>