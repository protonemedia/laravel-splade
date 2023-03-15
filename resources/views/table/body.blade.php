<tbody class="divide-y divide-gray-200 bg-white">
    @forelse($table->resource as $itemKey => $item)
        @php $itemPrimaryKey = $table->findPrimaryKey($item) @endphp

        <tr
            :class="{
                'bg-gray-50': table.striped && @js($itemKey) % 2,
                'hover:bg-gray-100': table.striped,
                'hover:bg-gray-50': !table.striped
            }"
        >
            @if($hasBulkActions = $table->hasBulkActions())
                <td width="64" class="text-xs px-6 py-4">
                    <input
                        @change="(e) => table.setSelectedItem(@js($itemPrimaryKey), e.target.checked)"
                        :checked="table.itemIsSelected(@js($itemPrimaryKey))"
                        :disabled="table.allItemsFromAllPagesAreSelected"
                        class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:opacity-50"
                        name="table-row-bulk-action"
                        type="checkbox"
                        value="{{ $itemPrimaryKey }}"
                    />
                </td>
            @endif

            @foreach($table->columns() as $column)
                <td
                    @if($table->rowLinks->has($itemKey))
                        @click="(event) => table.visit(@js($table->rowLinks->get($itemKey)), @js($table->rowLinkType), event)"
                    @endif
                    v-show="table.columnIsVisible(@js($column->key))"
                    class="whitespace-nowrap text-sm @if($loop->first && $hasBulkActions) pr-6 @else px-6 @endif py-4 @if($column->highlight) text-gray-900 font-medium @else text-gray-500 @endif @if($table->rowLinks->has($itemKey)) cursor-pointer @endif {{ $column->classes }}"
                >
                    @isset(${'spladeTableCell' . $column->keyHash()})
                        {{ ${'spladeTableCell' . $column->keyHash()}($item, $itemKey) }}
                    @else
                        {!! nl2br(e($getColumnDataFromItem($item, $column))) !!}
                    @endisset
                </td>
            @endforeach
        </tr>
    @empty
        <tr>
            <td colspan="{{ $table->columns()->count() }}" class="whitespace-nowrap">
                @if(isset($emptyState) && !!$emptyState)
                    {{ $emptyState }}
                @else
                    <p class="text-gray-700 px-6 py-12 font-medium text-sm text-center">
                        {{ __('There are no items to show.') }}
                    </p>
                @endif
            </td>
        </tr>
    @endforelse
</tbody>
