import { nextTick } from "vue";
import { Splade } from "./Splade.js";
import debounce from "lodash-es/debounce";

export default {
    created: (el, binding) => {
        if(Splade.isSsr) {
            return;
        }

        const key = `preserveScroll-${binding.arg}`;

        const scrollPosition = Splade.restore(key);

        if (scrollPosition) {
            nextTick(() => {
                if (typeof el.scrollTo === "function") {
                    el.scrollTo(scrollPosition.left, scrollPosition.top);
                } else {
                    el.scrollTop = scrollPosition.top;
                    el.scrollLeft = scrollPosition.left;
                }
            });
        }

        const rememberScroll = function () {
            Splade.remember(key, {
                top: el.scrollTop,
                left: el.scrollLeft,
            });
        };

        el.addEventListener("scroll", debounce(rememberScroll, 100));

        rememberScroll();
    }
};