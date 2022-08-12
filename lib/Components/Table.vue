<script>
import { nextTick } from "vue";
import { Splade } from "./../Splade.js";

import debounce from "lodash-es/debounce";
import endsWith from "lodash-es/endsWith";
import filter from "lodash-es/filter";
import forOwn from "lodash-es/forOwn";
import isArray from "lodash-es/isArray";
import isEqual from "lodash-es/isEqual";
import map from "lodash-es/map";
import startsWith from "lodash-es/startsWith";

export default {
    props: {
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
        }
    },

    data() {
        return {
            visibleColumns: [],
            forcedVisibleSearchInputs: []
        };
    },

    computed:{
        columnsAreToggled(){
            return !isEqual(this.visibleColumns, this.defaultVisibleToggleableColumns);
        },

        hasForcedVisibleSearchInputs(){
            return this.forcedVisibleSearchInputs.length > 0;
        }
    },

    mounted(){
        const query = this.getCurrentQuery();

        const columns = query.columns || [];

        if(columns.length === 0) {
            this.visibleColumns = this.defaultVisibleToggleableColumns;
        } else {
            this.visibleColumns = columns;
        }
    },

    methods: {
        reset() {
            this.forcedVisibleSearchInputs = [];
            this.visibleColumns = this.defaultVisibleToggleableColumns;

            let query = this.getCurrentQuery();

            query.columns = [];
            query.page = null;
            query.perPage = null;
            query.sort = null;

            forOwn(query, (queryValue, queryKey) => {
                if(startsWith(queryKey, "filter[")){
                    query[queryKey] = null;
                }
            });

            this.visitWithQueryObject(query, null, true);
        },

        columnIsVisible(key){
            return this.visibleColumns.includes(key);
        },

        toggleColumn(key) {
            const show = !this.columnIsVisible(key);

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

            if (isEqual(visibleColumnKeys, this.defaultVisibleToggleableColumns)) {
                visibleColumnKeys = [];
            }

            this.visibleColumns = visibleColumnKeys.length === 0
                ? this.defaultVisibleToggleableColumns
                : visibleColumnKeys;

            this.updateQuery("columns", visibleColumnKeys, null, false);
        },

        disableSearchInput(key) {
            this.forcedVisibleSearchInputs = this.forcedVisibleSearchInputs.filter((search) => search != key);

            this.updateQuery(`filter[${key}]`, null);
        },

        showSearchInput(key){
            this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, key];

            nextTick(() => {
                const $newEl = document.querySelector(`[name="searchInput-${key}"]`);

                $newEl.focus();
            });
        },

        isForcedVisible(key){
            return this.forcedVisibleSearchInputs.includes(key);
        },

        debounceUpdateQuery: debounce(function(key, value, $el) {
            this.updateQuery(key, value, $el);
        }, 350),

        getCurrentQuery() {
            const currentQuery = window.location.search;

            if(!currentQuery) {
                return {};
            }

            let query = {};

            currentQuery.substring(1).split("&").forEach((keyValue) =>{
                const splitted = decodeURIComponent(keyValue).split("=");

                let key = splitted[0];

                if(!endsWith(key, "]")) {
                    query[key] = splitted[1];
                    return;
                }

                const splittedKey = key.split("[");

                const stringOrNumericEl = splittedKey[1].substring(0, splittedKey[1].length - 1);

                if(parseInt(stringOrNumericEl) == stringOrNumericEl) {
                    key = splittedKey[0];

                    if(!isArray(query[key])) {
                        query[key] = [];
                    }

                    query[key].push(splitted[1]);
                }else{
                    query[key] = splitted[1];
                }
            });

            return query;
        },

        updateQuery(key, value, $el, reload)  {
            if(typeof reload === "undefined"){
                reload = true;
            }

            let queryObject = this.getCurrentQuery();
            queryObject[key] = value;

            this.visitWithQueryObject(queryObject, $el, reload);
        },

        visitWithQueryObject(queryObject, $el, reload){
            if(typeof reload === "undefined"){
                reload = true;
            }

            let query = {};

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

            forOwn(query, (value, key) => {
                if(value === "" || value === null || value === []) {
                    return;
                }

                if(queryString) {
                    queryString += "&";
                }

                queryString += `${key}=${value}`;
            });

            if(queryString) {
                queryString = "?" + queryString;
            }

            const url = window.location.pathname + queryString;

            if(!reload) {
                return Splade.replaceUrlOfCurrentPage(url);
            }

            Splade.replace(url).then(() => {
                if(typeof $el !== "undefined" && $el){
                    nextTick(() => {
                        const $newEl = document.querySelector(`[name="${$el.name}"]`);

                        $newEl.focus();
                    });
                }
            });
        }
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
            visit: Splade.visit,
        });
    },
};
</script>