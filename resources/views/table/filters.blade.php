<x-splade-component is="button-with-dropdown" dusk="filters-dropdown">
    <x-slot:button>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"
            :class="{
                'text-gray-400': !@js($table->hasFiltersEnabled()),
                'text-green-400': @js($table->hasFiltersEnabled()),
            }"
        >
            <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
        </svg>
    </x-slot:button>

    <div
      role="menu"
      aria-orientation="horizontal"
      aria-labelledby="filter-menu"
    >
        @foreach($table->filters() as $filter)
            <div>
                <h3 class="text-xs uppercase tracking-wide bg-gray-100 p-3">
                    {{ $filter->label }}
                </h3>

                <div class="p-2">
                    @if($filter->type === 'select')
                        <select
                            name="filter-{{ $filter->key }}"
                            class="block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm text-sm border-gray-300 rounded-md"
                            @change="table.updateQuery('filter[{{ $filter->key }}]', $event.target.value)"
                        >
                            @foreach($filter->options() as $optionKey => $option)
                                <option @selected($filter->hasValue() && $filter->value == $optionKey) value="{{ $optionKey }}">
                                    {{ $option }}
                                </option>
                            @endforeach
                        </select>
                    @endif
                </div>
            </div>
        @endforeach
    </div>
</x-splade-component>