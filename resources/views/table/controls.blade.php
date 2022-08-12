<div class="flex flex-row sm:justify-end mb-3 flex-wrap sm:flex-nowrap px-4 sm:px-0">
    @if($table->hasFilters())
        <div class="order-2 sm:order-1 mr-3">
            @include('splade::table.filters')
        </div>
    @endif

    @if($table->searchInputs('global'))
        <div class="w-full order-1 sm:order-2 flex-grow mb-3 sm:mb-0 sm:mr-3">
            @include('splade::table.global-search')
        </div>
    @endif

    <button
        v-show="@js($canResetTable()) || table.columnsAreToggled || table.hasForcedVisibleSearchInputs"
        type="button"
        class="order-5 sm:order-3 ml-auto sm:mr-3 bg-white border rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border-gray-300"
        @click.prevent="table.reset"
        dusk="reset-table"
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>

        <span>Reset</span>
    </button>

    @if($table->hasToggleableSearchInputs())
        <div class="order-3 sm:order-4 mr-3">
            @include('splade::table.add-search-row')
        </div>
    @endif

    @if($table->hasToggleableColumns())
        <div class="order-4 sm:order-5">
            @include('splade::table.columns')
        </div>
    @endif
</div>