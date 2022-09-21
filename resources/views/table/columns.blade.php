<x-splade-component is="button-with-dropdown" dusk="columns-dropdown">
    <x-slot:button>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"
            :class="{
                'text-gray-400': !table.columnsAreToggled,
                'text-green-400': table.columnsAreToggled,
            }">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
        </svg>
    </x-slot:button>

    <div class="px-2">
        <ul class="divide-y divide-gray-200">
            @foreach($table->columns() as $column)
                @if(!$column->canBeHidden)
                    @continue
                @endif

                <li class="py-2 flex items-center justify-between">
                    <p class="text-sm text-gray-900">
                        {{ $column->label }}
                    </p>

                    <button
                        type="button"
                        class="ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                        :class="{
                            'bg-green-500': table.columnIsVisible(@js($column->key)),
                            'bg-gray-200': !table.columnIsVisible(@js($column->key)),
                        }"
                        :aria-pressed="table.columnIsVisible(@js($column->key))"
                        aria-labelledby="toggle-column-{{ $column->key }}"
                        aria-describedby="toggle-column-{{ $column->key }}"
                        @click.prevent="table.toggleColumn(@js($column->key))"
                        dusk="toggle-column-{{ $column->key }}"
                    >
                        <span class="sr-only">Column status</span>
                        <span
                            aria-hidden="true"
                            :class="{
                                'translate-x-5': table.columnIsVisible(@js($column->key)),
                                'translate-x-0': !table.columnIsVisible(@js($column->key)),
                            }"
                            class="inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-300" />
                    </button>
                </li>
            @endforeach
        </ul>
    </div>
</x-splade-component>