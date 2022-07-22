<template>
  <!-- main -->
  <keep-alive :max="$spladeOptions.max_keep_alive">
    <Render
      :key="`visit.${Splade.pageVisitId}`"
      :class="{
        'transition ease-in-out blur-sm': Splade.currentStack > 0,
      }"
      :html="html"
    />
  </keep-alive>

  <Render :html="components" />

  <!-- modals -->
  <Render
    v-for="stack in Splade.currentStack"
    :key="`modal.${stack}`"
    class="z-20"
    :type="modals[stack].type"
    :html="modals[stack].html"
    :stack="stack"
    :on-top-of-stack="Splade.currentStack === stack"
    @close="closeModal(stack)"
  />

  <!-- server errors -->
  <ServerError
    v-if="serverErrorHtml"
    :html="serverErrorHtml"
    @close="closeServerError"
  />
</template>

<script setup>
import isString from "lodash-es/isString";
import { ref, provide, nextTick, inject } from "vue";
import { Splade } from "./Splade.js";
import Render from "./Components/Render.vue";
import ServerError from "./ServerError.vue";

const props = defineProps({
    el: {
        type: [String, Object],
        required: true,
    },
});

const $el = isString(props.el) ? document.getElementById(props.el) : props.el;

const components = JSON.parse($el.dataset.components);
const initialHtml = JSON.parse($el.dataset.html);
const initialSpladeData = JSON.parse($el.dataset.splade);

provide("stack", 0);

const html = ref();
const modals = ref([]);
const serverErrorHtml = ref(null);

function closeServerError() {
    serverErrorHtml.value = null;
}

function closeModal(stack) {
    modals[stack] = null;
    Splade.popStack();
}

const $spladeOptions = inject("$spladeOptions");

Splade.setOnHtml((newHtml, scrollY) => {
    modals.value = [];
    html.value = newHtml;

    nextTick(() => {
        window.scrollTo(0, scrollY);

        if ($spladeOptions.transform_anchors) {
            [...document.querySelectorAll("a")].forEach((anchor) => {
                if (anchor.href == "" || anchor.href.charAt(0) == "#") {
                    return;
                }

                if (anchor.__vnode.dynamicProps !== null) {
                    return;
                }

                if (anchor.hasAttribute("download")) {
                    return;
                }

                anchor.onclick = function (event) {
                    event.preventDefault();
                    Splade.visit(anchor.href);
                };
            });
        }
    });
});

Splade.setOnModal(function (html, type) {
    modals.value[Splade.currentStack] = { html, type };
});

Splade.setOnServerError(function (html) {
    serverErrorHtml.value = html;
});

Splade.init(initialHtml, initialSpladeData);
</script>