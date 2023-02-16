<template>
  <KeepAlive
    v-if="!$splade.isSsr"
    :max="$spladeOptions.max_keep_alive"
  >
    <Render
      :key="keepAliveKey"
      :html="$splade.htmlForDynamicComponent(name)"
      :passthrough="passthrough"
    />
  </KeepAlive>

  <Render
    v-else
    :key="keepAliveKey"
    :html="$splade.htmlForDynamicComponent(name)"
    :passthrough="passthrough"
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

    passthrough: {
        type: Object,
        required: false,
        default() {
            return {};
        },
    }
});

const $splade = inject("$splade") || {};
const $spladeOptions = inject("$spladeOptions") || {};
</script>