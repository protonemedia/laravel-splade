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

    onHtml(initialHtml);

    const href = isSsr ? "" : location.href;

    const newPage = setCurrentPage(
        href,
        initialHtml,
        {},
        pageVisitId.value
    );

    replaceState(newPage);
}

function handlePopstateEvent($event) {
    currentPage.value = $event.state;

    stack.value = 0;

    onHtml(currentPage.value.html, currentPage.value.rememberedState.scrollY);
}

function setCurrentPage(url, html, rememberedState, pageVisitId) {
    const newPage = {
        url,
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

function replaceState(page) {
    if (!isSsr) {
        window.history.replaceState(page, "", page.url);
    }
}

const currentPage = ref({});

function newPageFromResponse(response) {
    const url = response.request.responseURL;

    if (response.data.splade.modal) {
        stack.value++;
    }

    setSpladeData(response.data.splade);

    if (response.data.splade.modal) {
        return onModal(response.data.html, response.data.splade.modal);
    } else if (
        url !== currentPage.value.url || // different url
        response.data.splade.refresh || // forced refresh
        stack.value > 0 // redirect from modal
    ) {
        stack.value = 0; // reset modals
        pageVisitId.value++; // mark as next page visit
        onHtml(response.data.html, 0); // suppy html to app
    }

    const newPage = setCurrentPage(
        url,
        response.data.html,
        currentPage.value.rememberedState
            ? { ...currentPage.value.rememberedState }
            : {},
        pageVisitId.value
    );

    pushState(newPage);
}

//

const stack = ref(0);

function popStack() {
    stack.value--;
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

function request(url, method, data, headers) {
    if (!isSsr) {
        remember("scrollY", window.scrollY);
    }

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
    });

    promise
        .then((response) => {
            newPageFromResponse(response);
        })
        .catch((error) => {
            console.log(error);

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

function visit(url) {
    request(url, "GET", {}, {});
}

function modal(url) {
    request(url, "GET", {}, { "X-Splade-Modal": "modal" });
}

function slideover(url) {
    request(url, "GET", {}, { "X-Splade-Modal": "slideover" });
}

function refresh() {
    request(currentPage.value.url, "GET", {}, { "X-Splade-Refresh": true });
}

const onHtmlFunction = ref(() => { });
const onModalFunction = ref(() => { });
const onServerErrorFunction = ref(() => { });

const Splade = {
    init,
    visit,
    modal,
    slideover,
    refresh,
    request,
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