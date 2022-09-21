<template>
  <KeepAlive
    v-if="!$splade.isSsr"
    :max="$spladeOptions.max_keep_alive"
  >
    <Render
      :key="keepAliveKey"
      :html="$splade.htmlForDynamicComponent(name)"
    />
  </KeepAlive>

  <Render
    v-else
    :key="keepAliveKey"
    :html="$splade.htmlForDynamicComponent(name)"
  />
</template>

<script setup>
import { inject } from "vue";
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