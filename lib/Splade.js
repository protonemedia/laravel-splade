import { default as Axios } from "axios";
import { computed, ref } from "vue";
import forEach from "lodash-es/forEach";
import reverse from "lodash-es/reverse";

const pageVisitId = ref(1);

const isSsr = typeof window === "undefined";

function init(initialHtml, initialSpladeData) {
    if (!isSsr){
        window.addEventListener("popstate", handlePopstateEvent.bind(this));
    }

    setSpladeData(initialSpladeData);

    onHead(initialSpladeData.head);
    onHtml(initialHtml);

    const href = isSsr ? "" : location.href;

    const newPage = setCurrentPage(
        href,
        initialSpladeData.head,
        initialHtml,
        {},
        pageVisitId.value
    );

    replaceState(newPage);
}

function handlePopstateEvent($event) {
    currentPage.value = $event.state;

    stack.value = 0;

    onHead(currentPage.value.head);
    onHtml(currentPage.value.html, currentPage.value.rememberedState.scrollY);
}

function setCurrentPage(url, head, html, rememberedState, pageVisitId) {
    const newPage = {
        url,
        head,
        html,
        rememberedState,
        pageVisitId,
    };

    currentPage.value = newPage;

    return newPage;
}

function pushState(page) {
    if (!isSsr) {
        window.history.pushState(page, "", page.url);
    }
}

function replaceUrlOfCurrentPage(newUrl) {
    const newPage = setCurrentPage(
        newUrl,
        JSON.parse(JSON.stringify(currentPage.value.head)),
        currentPage.value.html,
        { ...currentPage.value.rememberedState },
        currentPage.value.pageVisitId,
    );

    if (!isSsr) {
        window.history.replaceState(newPage, "", newPage.url);
    }
}

function replaceState(page) {
    if (!isSsr) {
        window.history.replaceState(page, "", page.url);
    }
}

const currentPage = ref({});

const newPages = ref(0);

function newPageFromResponse(response, replace) {
    newPages.value++;

    const url = response.request.responseURL;

    if (response.data.splade.modal) {
        stack.value++;
    }

    setSpladeData(response.data.splade);
    onHead(response.data.splade.head);

    const newPageIsCurrentUrl = url === currentPage.value.url;

    if (newPageIsCurrentUrl) {
        replace = true;
    }

    if (response.data.splade.modal) {
        return onModal(response.data.html, response.data.splade.modal);
    } else if (response.data.splade.preventRefresh && newPageIsCurrentUrl) {
        return;
    }

    stack.value = 0; // reset modals

    let html = response.data.html;

    if (replace) {
        html += `<!-- ${newPages.value} -->`;
    } else {
        pageVisitId.value++; // mark as next page visit
    }

    onHtml(html, 0); // supply html to app

    const newPage = setCurrentPage(
        url,
        response.data.splade.head,
        html,
        currentPage.value.rememberedState
            ? { ...currentPage.value.rememberedState }
            : {},
        pageVisitId.value
    );

    replace ? replaceState(newPage) : pushState(newPage);
}

//

const stack = ref(0);

function popStack() {
    stack.value--;

    onHead(headData(stack.value));
}

//

const sharedData = ref({});

//

const _validationErrors = ref({});

const validationErrors = (stack) => {
    return _validationErrors.value[stack];
};

const hasValidationErrors = (stack) => {
    return Object.keys(validationErrors.value[stack]).length > 0;
};

//

const _headData = ref({});

const headData = (stack) => {
    return _headData.value[stack];
};

//

const _flashData = ref({});

const flashData = (stack) => {
    return _flashData.value[stack];
};

//

const toasts = ref([]);

const toastsReversed = computed(() => {
    return reverse(toasts.value);
});

function pushToast(toast) {
    toasts.value.push(toast);
}

function dismissToast(key) {
    toasts.value[key].dismissed = true;
    toasts.value[key].html = null;
}

//

const confirmModal = ref(null);

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

function clearConfirmModal() {
    confirmModal.value = null;
}

//

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

//

function onServerError(html) {
    onServerErrorFunction.value(html);
}

function onHead(head) {

    onHeadFunction.value(head);
}

function onHtml(html, scrollY) {
    onHtmlFunction.value(html, scrollY);
}

function onModal(html, type) {
    onModalFunction.value(html, type);
}

//

const rememberedData = ref({});

function remember(key, data, useLocalStorage) {
    rememberedData.value[key] = data;

    if (useLocalStorage) {
        storeInLocalStorage(key, data);
    }
}

function storeInLocalStorage(key, data) {
    let allData = JSON.parse(localStorage.getItem("splade") || "{}") || {};

    allData[key] = data;

    localStorage.setItem("splade", JSON.stringify(allData));
}

function restore(key, useLocalStorage) {
    if (useLocalStorage) {
        const spladeData = JSON.parse(localStorage.getItem("splade") || "{}") || {};

        return spladeData[key];
    }

    return rememberedData.value[key];
}

//

function fireEvent(name, data) {
    if (isSsr) {
        return;
    }

    document.dispatchEvent(new CustomEvent(`splade:${name}`, { detail: data }));
}

function request(url, method, data, headers, replace) {
    if (!isSsr) {
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

            const spladeData = error.response.data.splade;

            if (spladeData) {
                setSpladeData(spladeData);
            }

            if (error.response.status == 422) {
                return;
            }

            onServerError(
                error.response.data.html
                    ? error.response.data.html
                    : error.response.data
            );
        });

    return promise;
}

function replace(url) {
    return request(url, "GET", {}, {}, true);
}

function visit(url) {
    return request(url, "GET", {}, {}, false);
}

function modal(url) {
    return request(url, "GET", {}, { "X-Splade-Modal": "modal" }, false);
}

function slideover(url) {
    return request(url, "GET", {}, { "X-Splade-Modal": "slideover" }, false);
}

function refresh() {
    return replace(currentPage.value.url);
}

const onHeadFunction = ref(() => { });
const onHtmlFunction = ref(() => { });
const onModalFunction = ref(() => { });
const onServerErrorFunction = ref(() => { });

const Splade = {
    init,
    replace,
    visit,
    modal,
    slideover,
    refresh,
    request,
    replaceUrlOfCurrentPage,
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
    isSsr
};

export { Splade };