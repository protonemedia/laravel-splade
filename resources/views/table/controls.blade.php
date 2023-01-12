<div class="flex flex-row sm:justify-end mb-3 px-4 sm:px-0 -mr-2 sm:-mr-3">
    @if($table->hasExports() || $table->hasBulkActions())
        <div class="order-1 mr-2 sm:mr-3" v-if="table.hasSelectedItems || @js($table->hasExports())">
            @include('splade::table.bulk-actions-exports')
        </div>
    @endif

    @if($table->hasFilters())
        <div class="order-2 mr-2 sm:mr-3">
            @include('splade::table.filters')
        </div>
    @endif

    @if($table->searchInputs('global'))
        <div class="w-full order-3 flex-grow mr-2 sm:mr-3">
            @include('splade::table.global-search')
        </div>
    @endif

    <button
        v-show="@js($canResetTable()) || table.columnsAreToggled || table.hasForcedVisibleSearchInputs"
        type="button"
        class="order-6 sm:order-4 ml-auto mr-2 sm:mr-3 bg-white border rounded-md shadow-sm px-2.5 sm:px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border-gray-300"
        @click.prevent="table.reset"
        dusk="reset-table"
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>

        <span class="ml-2 hidden sm:inline">{{ __('Reset') }}</span>
    </button>

    @if($table->hasToggleableSearchInputs())
        <div class="order-4 sm:order-5 mr-2 sm:mr-3">
            @include('splade::table.add-search-row')
        </div>
    @endif

    @if($table->hasToggleableColumns())
        <div class="order-5 sm:order-6 mr-2 sm:mr-3">
            @include('splade::table.columns')
        </div>
    @endif
</div>
