<x-splade-component is="button-with-dropdown">
    <x-slot:button>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
        </svg>
    </x-slot:button>

    <div class="mt-2 min-w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div class="flex flex-col">
            @foreach($table->getBulkActions() as $bulkAction)
                <button
                    class="text-left w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-normal"
                    @click.prevent="table.performBulkAction(@js($bulkAction->getUrl()))"
                    dusk="action.{{ $bulkAction->getSlug() }}">
                    {{ $bulkAction->label }}
                </button>
            @endforeach

            @if($table->hasExports() && $table->hasBulkActions())
                <div class="border-t w-full"></div>
            @endif

            @foreach($table->getExports() as $export)
                <a
                    download
                    class="text-left w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-normal"
                    href="{{ $export->getUrl() }}"
                    dusk="action.{{ $export->getSlug() }}">
                    {{ $export->label }}
                </a>
            @endforeach
        </div>
    </div>
</x-splade-component>