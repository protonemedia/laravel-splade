import { default as Axios } from "axios";
import { computed, ref } from "vue";
import forEach from "lodash-es/forEach";
import reverse from "lodash-es/reverse";
import { forOwn } from "lodash-es";

const dynamicVisitId = ref(0);
const pageVisitId = ref(1);
const currentPage = ref({});
const stack = ref(0);

const isSsr = typeof window === "undefined";

/**
 * Initializes the first request. It adds a listener for when
 * a user navigates with the browser's back/forward buttons,
 * and it sets the current page and Splade meta data.
 */
function init(initialHtml, initialDynamics, initialSpladeData) {
    if (!isSsr){
        window.addEventListener("popstate", handlePopstateEvent.bind(this));
    }

    // The pageVisitId is always 1, but we might have no
    // Dynamic Components on the initial request.
    if(Object.keys(initialDynamics).length > 0) {
        dynamicVisitId.value++;
    }

    setSpladeData(initialSpladeData);
    onHead(initialSpladeData.head);
    onHtml(initialHtml);

    // SSR has no location
    const href = isSsr ? "" : location.href;

    const newPage = setCurrentPage(
        href,
        initialSpladeData.head,
        initialHtml,
        initialDynamics,
        {},
        pageVisitId.value,
        dynamicVisitId.value
    );

    // Manipulate the current state so it holds the current page.
    replaceState(newPage);
}

/**
 * This method is called when a user navigates
 * with the browser's back/forward buttons.
 */
function handlePopstateEvent($event) {
    if(!$event.state) {
        return;
    }

    currentPage.value = $event.state;

    // Hide modals that were still visible when the user left the page.
    stack.value = 0;

    onHead(currentPage.value.head);
    onHtml(currentPage.value.html, currentPage.value.rememberedState.scrollY);
}

/**
 * Wraps the given arguments in an object and updates the ref.
 */
function setCurrentPage(url, head, html, dynamics, rememberedState, pageVisitId, dynamicVisitId) {
    const newPage = {
        url,
        head,
        html,
        dynamics,
        rememberedState,
        pageVisitId,
        dynamicVisitId,
    };

    currentPage.value = newPage;

    return newPage;
}

/**
 * Pushes the given page to the browser's history.
 */
function pushState(page) {
    if (!isSsr) {
        window.history.pushState(page, "", page.url);
    }
}

/**
 * This updates *just* the URL of the current page and replaces the
 * current history state of the browser with the new URL as well.
 * This method is used, for example, in the Table component.
 */
function replaceUrlOfCurrentPage(newUrl) {
    const newPage = setCurrentPage(
        newUrl,
        JSON.parse(JSON.stringify(currentPage.value.head)),
        currentPage.value.html,
        currentPage.value.dynamics,
        { ...currentPage.value.rememberedState },
        currentPage.value.pageVisitId,
        currentPage.value.dynamicVisitId,
    );

    if (!isSsr) {
        window.history.replaceState(newPage, "", newPage.url);
    }
}

/**
 * Replaces the current browser history state with the given page.
 */
function replaceState(page) {
    if (!isSsr) {
        window.history.replaceState(page, "", page.url);
    }
}

/**
 * This is only used to add to the incoming HTML. This way,
 * we never have duplicate HTML content.
 */
const newPages = ref(0);

/**
 * Handles an incoming response from a Splade request.
 */
function newPageFromResponse(response, replace) {
    newPages.value++;

    const url = response.request.responseURL;

    // Lazy responses are handled by the Lazy component itself.
    if (response.data.splade.lazy) {
        return;
    }

    // If this is a Modal response, we increase the stack count.
    if (response.data.splade.modal) {
        stack.value++;
    }

    // Update the meta data.
    setSpladeData(response.data.splade);
    onHead(response.data.splade.head);

    const newPageIsCurrentUrl = url === currentPage.value.url;

    // If the response URL is the same as the current one, we don't want
    // to increase the 'pageVisitId' as it's not really a new page, and
    // we don't want to push a new state to the browser's history.
    if (newPageIsCurrentUrl) {
        replace = true;
    }

    if (response.data.splade.modal) {
        return onModal(response.data.html, response.data.splade.modal);
    } else if (response.data.splade.preventRefresh && newPageIsCurrentUrl) {
        // The user explicitly requested to prevent a refresh, and the response
        // URL is the same as the current one, so don't do anything.
        return;
    }

    // Reset the modals
    stack.value = 0;

    let html = response.data.html;
    let dynamics = response.data.dynamics;

    const currentPageHasDynamics = Object.keys(currentPage.value.dynamics).length > 0;
    const nextPageHasDynamics = Object.keys(dynamics).length > 0;

    if (replace) {
        // Add the 'newPages' counter as a comment to each Dynamic Component
        // so the Render component will rerender it.
        if (nextPageHasDynamics) {
            forOwn(dynamics, (html, name) => {
                dynamics[name] += `<!-- ${newPages.value} -->`;
            });
        }

        // We only add it to the HTML when we didn't receive Dynamic
        // Components, or when we *do* receive Dynamic Components
        // and the current page should be forced to rerender.
        if (!nextPageHasDynamics || !currentPageHasDynamics) {
            html += `<!-- ${newPages.value} -->`;
        }
    } else {
        // If we don't replace the current state, we increase the
        // visit counters so the KeepAlive component can keep
        // track of the state of the previous request.
        if(nextPageHasDynamics) {
            dynamicVisitId.value++;
        }

        if(!nextPageHasDynamics || !currentPageHasDynamics) {
            pageVisitId.value++;
        }
    }

    // Bring the HTML to the Vue app.
    onHtml(html, 0);

    // Initialize a new page object.
    const newPage = setCurrentPage(
        url,
        response.data.splade.head,
        html,
        dynamics,
        currentPage.value.rememberedState
            ? { ...currentPage.value.rememberedState }
            : {},
        pageVisitId.value,
        dynamicVisitId.value,
    );

    // Replace or push the new page into the browser's history.
    replace ? replaceState(newPage) : pushState(newPage);
}


/**
 * Decrease the stack count when a modal closes and restore the head data.
 */
function popStack() {
    stack.value--;

    onHead(headData(stack.value));
}

const _validationErrors = ref({});

/**
 * Returns the validation errors for the given stack.
 */
const validationErrors = (stack) => {
    return _validationErrors.value[stack];
};

/**
 * Returns a boolean whether the given stack has validation errors.
 */
const hasValidationErrors = (stack) => {
    return Object.keys(validationErrors.value[stack]).length > 0;
};

const _headData = ref({});

/**
 * Returns the head data for the given stack.
 */
const headData = (stack) => {
    return _headData.value[stack];
};

const _flashData = ref({});

/**
 * Returns the flash data for the given stack.
 */
const flashData = (stack) => {
    return _flashData.value[stack];
};

const toasts = ref([]);

/**
 * Adds a new toast to the array.
 */
function pushToast(toast) {
    toasts.value.push(toast);
}

/**
 * Returns all toasts in reversed order so we
 * can show the latest toast on top.
 */
const toastsReversed = computed(() => {
    return reverse(toasts.value);
});

/**
 * Mark a toast as dismissed and clear the HTML.
 */
function dismissToast(key) {
    toasts.value[key].dismissed = true;
    toasts.value[key].html = null;
}


const confirmModal = ref(null);

/**
 * Shows the confirm modal with the given texts and
 * returns a promise to listen for the response.
 */
function confirm(title, text, confirmButton, cancelButton) {
    let resolvePromise;
    let rejectPromise;

    const promise = new Promise((resolve, reject) => {
        resolvePromise = resolve;
        rejectPromise = reject;
    });

    confirmModal.value = {
        title,
        text,
        confirmButton,
        cancelButton,
        resolvePromise,
        rejectPromise,
    };

    return promise;
}

/**
 * Hides the confirmation modal.
 */
function clearConfirmModal() {
    confirmModal.value = null;
}

const sharedData = ref({});

/**
 * Parses the Splade data (shared data, flash data, head, toasts, and validation errors).
 */
function setSpladeData(spladeData) {
    sharedData.value = spladeData.shared ? spladeData.shared : {};

    _flashData.value[stack.value] = spladeData.flash ? spladeData.flash : {};

    _headData.value[stack.value] = spladeData.head ? spladeData.head : {};

    forEach(spladeData.toasts ? spladeData.toasts : [], (toast) => {
        toasts.value.push(toast);
    });

    _validationErrors.value[stack.value] = spladeData.errors
        ? spladeData.errors
        : {};
}

const onHeadFunction = ref(() => { });
const onHtmlFunction = ref(() => { });
const onModalFunction = ref(() => { });
const onServerErrorFunction = ref(() => { });

/**
 * Passes the given head data to the configurable 'onHead' function.
 */
function onHead(head) {
    onHeadFunction.value(head);
}

/**
 * Passes the given HTML and scroll position to the configurable 'onHtml' function.
 */
function onHtml(html, scrollY) {
    onHtmlFunction.value(html, scrollY);
}

/**
 * Passes the given modal HTML and type to the configurable 'onModal' function.
 */
function onModal(html, type) {
    onModalFunction.value(html, type);
}

/**
 * Passes the given html to the configurable 'onServerError' function.
 */
function onServerError(html) {
    onServerErrorFunction.value(html);
}

const rememberedData = ref({});

/**
 * Stores the given data in the remember-object, and
 * optionally in the browser's local storage.
 */
function remember(key, data, useLocalStorage) {
    rememberedData.value[key] = data;

    if (useLocalStorage) {
        storeInLocalStorage(key, data);
    }
}

/**
 * Stores the given data in the browser's local storage.
 */
function storeInLocalStorage(key, data) {
    let allData = JSON.parse(localStorage.getItem("splade") || "{}") || {};

    allData[key] = data;

    localStorage.setItem("splade", JSON.stringify(allData));
}

/**
 * Retrieves an item from the remember-object or from the browser's local storage.
 */
function restore(key, useLocalStorage) {
    if (useLocalStorage) {
        const spladeData = JSON.parse(localStorage.getItem("splade") || "{}") || {};

        return spladeData[key];
    }

    return rememberedData.value[key];
}

/**
 * Dispatches a Splade event with the given name and data.
 */
function fireEvent(name, data) {
    if (isSsr) {
        return;
    }

    document.dispatchEvent(new CustomEvent(`splade:${name}`, { detail: data }));
}

/**
 * Performes an ajax request and returns the promise.
 */
function request(url, method, data, headers, replace) {
    if (!isSsr) {
        // In case the user navigates back to the current page.
        remember("scrollY", window.scrollY);
    }

    fireEvent("request", { url, method, data, headers, replace });

    const promise = Axios({
        method,
        url,
        data,
        headers: {
            "X-Splade": true,
            "X-Requested-With": "XMLHttpRequest",
            Accept: "text/html, application/xhtml+xml",
            ...headers,
        },
        onUploadProgress: progress => {
            if (data instanceof FormData) {
                // To update the progress bar.
                progress.percentage = Math.round(progress.loaded / progress.total * 100);
                fireEvent("request-progress", { url, method, data, headers, replace, progress });
            }
        },
    });

    promise
        .then((response) => {
            newPageFromResponse(response, replace);
            fireEvent("request-response", { url, method, data, headers, replace, response });
        })
        .catch((error) => {
            fireEvent("request-error", { url, method, data, headers, replace, error });

            // Though the request has failed, it may still
            // return Splade data with validation errors.
            const spladeData = error.response.data.splade;

            if (spladeData) {
                if (!spladeData.lazy) {
                    setSpladeData(spladeData);
                }
            }

            // Validation errors are handled by the 'setSpladeData' call.
            if (error.response.status == 422) {
                return;
            }

            // Show an overlay with the server error.
            onServerError(
                error.response.data.html
                    ? error.response.data.html
                    : error.response.data
            );
        });

    return promise;
}

/**
 * Visits the given URL but replaces the current page instead
 * of pushing a new one to the browser's navigation history.
 */
function replace(url) {
    return request(url, "GET", {}, {}, true);
}

/**
 * Visits the given URL.
 */
function visit(url) {
    return request(url, "GET", {}, {}, false);
}

/**
 * Visit the given URL in a modal.
 */
function modal(url) {
    return request(url, "GET", {}, { "X-Splade-Modal": "modal" }, false);
}

/**
 * Visit the given URL in a slideover.
 */
function slideover(url) {
    return request(url, "GET", {}, { "X-Splade-Modal": "slideover" }, false);
}

/**
 * Load a Lazy Component.
 */
function lazy(url, name) {
    return request(url, "GET", {}, { "X-Splade-Lazy": name }, false);
}

/**
 * Refresh the current page with a new visit.
 */
function refresh() {
    return replace(currentPage.value.url);
}

/**
 * Splade Core instance.
 */
const Splade = {
    init,
    replace,
    visit,
    modal,
    slideover,
    refresh,
    request,
    lazy,
    replaceUrlOfCurrentPage,
    htmlForDynamicComponent(name) {
        return currentPage.value.dynamics[name];
    },
    setOnHead(onHead) {
        onHeadFunction.value = onHead;
    },
    setOnHtml(onHtml) {
        onHtmlFunction.value = onHtml;
    },
    setOnModal(onModal) {
        onModalFunction.value = onModal;
    },
    setOnServerError(onServerError) {
        onServerErrorFunction.value = onServerError;
    },
    hasValidationErrors,
    validationErrors,
    sharedData, // ref
    flashData,
    toasts, // ref
    toastsReversed, // ref
    confirmModal, // ref
    confirm,
    clearConfirmModal,
    pushToast,
    dismissToast,
    restore,
    remember,
    popStack,
    currentStack: stack,    // ref
    pageVisitId: computed(() => currentPage.value.pageVisitId), // ref
    dynamicVisitId: computed(() => currentPage.value.dynamicVisitId), // ref
    isSsr
};

export { Splade };