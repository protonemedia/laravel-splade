<script>
import { nextTick } from "vue";
import { Splade } from "./../Splade.js";

import debounce from "lodash-es/debounce";
import endsWith from "lodash-es/endsWith";
import filter from "lodash-es/filter";
import forOwn from "lodash-es/forOwn";
import isArray from "lodash-es/isArray";
import isEqual from "lodash-es/isEqual";
import isString from "lodash-es/isString";
import map from "lodash-es/map";
import startsWith from "lodash-es/startsWith";

export default {
    inject: ["stack"],

    props: {
        baseUrl: {
            type: String,
            required: false,
            default() {
                return window.location.pathname;
            }
        },

        striped: {
            type: Boolean,
            required: false,
            default: false
        },

        columns: {
            type: Object,
            required: true
        },

        defaultVisibleToggleableColumns: {
            type: Array,
            required: true
        },

        searchDebounce: {
            type: Number,
            required: false,
            default: 350
        },

        itemsOnThisPage: {
            type: Number,
            required: false,
            default: 0
        },

        itemsOnAllPages: {
            type: Number,
            required: false,
            default: 0
        }
    },

    data() {
        return {
            selectedItems: [],
            visibleColumns: [],
            forcedVisibleSearchInputs: [],
            debounceUpdateQuery: null,
            isLoading: false,
            processingAction: false
        };
    },

    computed: {
        /**
         * Returns a boolean whether the currently toggled columns
         * differ from the default set of visible columns.
         */
        columnsAreToggled() {
            return !isEqual(this.visibleColumns, this.defaultVisibleToggleableColumns);
        },

        /*
         * Returns a boolean whether there are Search Inputs visible
         * that are not (yet) in the query string.
         */
        hasForcedVisibleSearchInputs() {
            return this.forcedVisibleSearchInputs.length > 0;
        },

        allItemsFromAllPagesAreSelected() {
            return this.selectedItems.length === 1 && this.selectedItems[0] === "*";
        },

        allVisibleItemsAreSelected() {
            const selectedItemsCount = this.selectedItems.length;

            if(selectedItemsCount === 1 && this.selectedItems[0] === "*") {
                return true;
            }

            if(selectedItemsCount > 0 && selectedItemsCount === this.itemsOnThisPage) {
                return true;
            }

            return false;
        },

        hasSelectedItems() {
            return this.selectedItems.length > 0;
        },

        totalSelectedItems() {
            const selectedItemsCount = this.selectedItems.length;

            if(selectedItemsCount === 1 && this.selectedItems[0] === "*") {
                return this.itemsOnAllPages;
            }

            return selectedItemsCount;
        }
    },

    created() {
        /*
         * Debounces the update query.
         */
        this.debounceUpdateQuery = debounce(function(key, value, $el) {
            this.updateQuery(key, value, $el);
        }, this.searchDebounce);
    },

    mounted() {
        const query = this.getCurrentQuery();

        const columns = query.columns || [];

        // Parse the query string and figure out whether there
        // are Search Inputs that should be visible.
        forOwn(query, (value, key) => {
            if(startsWith(key, "filter[") && !value) {
                const splittedKey = key.split("[");
                const filterKey = splittedKey[1].substring(0, splittedKey[1].length - 1);

                this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, filterKey];
            }
        });

        // Set the visible columns.
        if(columns.length === 0) {
            this.visibleColumns = this.defaultVisibleToggleableColumns;
        } else {
            this.visibleColumns = columns;
        }
    },

    methods: {
        visitLink(url, type, $event) {
            if($event?.target?.tagName === "A" || $event?.target?.tagName === "BUTTON") {
                return;
            }

            if(type === "modal") {
                return Splade.modal(url);
            }

            if(type === "slideover") {
                return Splade.slideover(url);
            }

            return Splade.visit(url);
        },

        /**
         * Resets the table to its initial state.
         */
        reset() {
            this.forcedVisibleSearchInputs = [];
            this.visibleColumns = this.defaultVisibleToggleableColumns;

            let query = this.getCurrentQuery();

            query.columns = [];
            query.page = null;
            query.perPage = null;
            query.sort = null;

            forOwn(query, (queryValue, queryKey) => {
                if(startsWith(queryKey, "filter[")) {
                    query[queryKey] = null;
                }
            });

            this.visitWithQueryObject(query, null, true);
        },

        /*
         * Returns a boolean whether the given key is visible.
         */
        columnIsVisible(key) {
            return this.visibleColumns.includes(key);
        },

        /*
         * Toggles the column key.
         */
        toggleColumn(key) {
            // Invert the current visibility.
            const show = !this.columnIsVisible(key);

            // Generate a new array with all visible colums.
            const visibleColumns = filter(this.columns, (column) => {
                if(!column.can_be_hidden) {
                    return true;
                }

                if(column.key === key) {
                    return show;
                }

                return this.visibleColumns.includes(column.key);
            });

            let visibleColumnKeys = map(visibleColumns, (column) => {
                return column.key;
            }).sort();

            // When the array doesn't differ from the default, we can use the default
            // instead of passing all visible columns.
            if (isEqual(visibleColumnKeys, this.defaultVisibleToggleableColumns)) {
                visibleColumnKeys = [];
            }

            this.visibleColumns = visibleColumnKeys.length === 0
                ? this.defaultVisibleToggleableColumns
                : visibleColumnKeys;

            this.updateQuery("columns", visibleColumnKeys, null, false);
        },

        /**
         * Removes the key from being forcefully visible, and sets the value to null.
         */
        disableSearchInput(key) {
            this.forcedVisibleSearchInputs = this.forcedVisibleSearchInputs.filter((search) => search != key);

            this.updateQuery(`filter[${key}]`, null);
        },

        /*
         * Forces the given Search Input key to be visible, and focuses the input element.
         */
        showSearchInput(key) {
            this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, key];

            nextTick(() => {
                const $newEl = document.querySelector(`[name="searchInput-${key}"]`);

                $newEl.focus();
            });
        },

        /*
         * Returns a boolean whether the key should be visible.
         */
        isForcedVisible(key) {
            return this.forcedVisibleSearchInputs.includes(key);
        },

        /*
         * Parses the window's current query as an object.
         */
        getCurrentQuery() {
            const currentQuery = window.location.search;

            if(!currentQuery) {
                return {};
            }

            let query = {};

            // Remove the question mark and split the keys.
            currentQuery.substring(1).split("&").forEach((keyValue) =>{
                const splitted = decodeURIComponent(keyValue).split("=");

                let key = splitted[0];

                if(!endsWith(key, "]")) {
                    // A regular 'key=value' string
                    query[key] = splitted[1];
                    return;
                }

                // A nested key - grab the key and check if it's a numeric key or a string.
                const splittedKey = key.split("[");
                const stringOrNumericEl = splittedKey[1].substring(0, splittedKey[1].length - 1);

                if(parseInt(stringOrNumericEl) == stringOrNumericEl) {
                    // Handle as an array.
                    key = splittedKey[0];

                    if(!isArray(query[key])) {
                        query[key] = [];
                    }

                    query[key].push(splitted[1]);
                } else {
                    // Handle as an object.
                    query[key] = splitted[1];
                }
            });

            return query;
        },

        /*
         * Update the current query
         */
        updateQuery(key, value, $el, reload)  {
            // When reload is false, it only updates the query
            // string, but doesn't perform a new request.
            if(typeof reload === "undefined") {
                reload = true;
            }

            let queryObject = this.getCurrentQuery();
            queryObject[key] = value;

            // Reset the page value when the 'perPage' or filters change.
            if(startsWith(key, "perPage") || startsWith(key, "filter[")) {
                delete queryObject["page"];
            }

            this.visitWithQueryObject(queryObject, $el, reload);
        },

        visitWithQueryObject(queryObject, $el, reload) {
            // When reload is false, it only updates the query
            // string, but doesn't perform a new request.
            if(typeof reload === "undefined") {
                reload = true;
            }

            let query = {};

            // Regenerate the query string object.
            forOwn(queryObject, (queryValue, queryKey) => {
                if(!isArray(queryValue)) {
                    query[queryKey] = queryValue;
                    return;
                }

                if(queryValue.length === 0) {
                    return;
                }

                queryValue.forEach((arrayValue, arrayKey) => {
                    query[`${queryKey}[${arrayKey}]`] = arrayValue;
                });
            });

            let queryString = "";

            // Build the query string.
            forOwn(query, (value, key) => {
                if(value === null || value === []) {
                    return;
                }

                if(queryString) {
                    queryString += "&";
                }

                queryString += `${key}=${value}`;
            });

            // Prepend the question mark when needed.
            if(queryString) {
                queryString = "?" + queryString;
            }

            // Build the new URL.
            const url = this.baseUrl + queryString;

            if(!reload) {
                if(this.stack > 0) {
                    // Table is mounted in a modal, so we can't replace the URL.
                    return;
                }

                // Just replace the URL.
                return Splade.replaceUrlOfCurrentPage(url);
            }

            this.isLoading = true;
            let currentValueOfElement = null;

            if(typeof $el !== "undefined" && $el) {
                currentValueOfElement = document.querySelector(`[name="${$el.name}"]`)?.value;
            }

            const headers = this.stack > 0 ? {
                "X-Splade-Modal": Splade.stackType(this.stack),
                "X-Splade-Modal-Target": this.stack,
            } : {};

            // Perform the request, and optionally focus on the given element.
            Splade.replace(url, headers).then(() => {
                this.isLoading = false;

                if(typeof $el !== "undefined" && $el) {
                    nextTick(() => {
                        const $newEl = document.querySelector(`[name="${$el.name}"]`);

                        $newEl.focus();

                        if(currentValueOfElement) {
                            $newEl.value = currentValueOfElement;
                        }
                    });
                }
            });
        },

        async performBulkAction(url, confirm, confirmText, confirmButton, cancelButton, requirePassword) {
            if(typeof requirePassword === "undefined") {
                requirePassword = false;
            }

            let filledPassword = null;

            if(confirm) {
                try {
                    filledPassword = await Splade.confirm(confirm === true ? "" : confirm, confirmText, confirmButton, cancelButton, requirePassword ? true : false);
                } catch {
                    return false;
                }
            }

            this.isLoading = true;

            const data = { ids: this.selectedItems };

            if(requirePassword) {
                const passwordField = isString(requirePassword) && requirePassword ? requirePassword : "password";
                data[passwordField] = filledPassword;
            }

            Splade.request(url, "POST", data, {}, false)
                .then((response) => {
                    response.data;
                })
                .catch(() => {
                    this.isLoading = false;
                });
        },

        setSelectedItems(items) {
            this.selectedItems = isArray(items) ? items : [];
        },

        itemIsSelected(item) {
            if(this.selectedItems.length == 1 && this.selectedItems[0] == "*") {
                return true;
            }

            return this.selectedItems.includes(item);
        },

        setSelectedItem(key, checked) {
            checked
                ? this.selectedItems.push(key)
                : (this.selectedItems = this.selectedItems.filter(item => item !== key));
        },
    },

    render() {
        return this.$slots.default({
            columnIsVisible: this.columnIsVisible,
            columnsAreToggled: this.columnsAreToggled,
            debounceUpdateQuery: this.debounceUpdateQuery,
            disableSearchInput: this.disableSearchInput,
            hasForcedVisibleSearchInputs: this.hasForcedVisibleSearchInputs,
            isForcedVisible: this.isForcedVisible,
            reset: this.reset,
            showSearchInput: this.showSearchInput,
            striped: this.striped,
            toggleColumn: this.toggleColumn,
            updateQuery: this.updateQuery,
            visit: this.visitLink,
            totalSelectedItems: this.totalSelectedItems,
            allItemsFromAllPagesAreSelected: this.allItemsFromAllPagesAreSelected,
            allVisibleItemsAreSelected: this.allVisibleItemsAreSelected,
            hasSelectedItems: this.hasSelectedItems,
            setSelectedItems: this.setSelectedItems,
            itemIsSelected: this.itemIsSelected,
            setSelectedItem: this.setSelectedItem,
            performBulkAction: this.performBulkAction,
            processingAction: this.processingAction,
            isLoading: this.isLoading,
        });
    },
};
</script>