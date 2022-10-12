<tbody class="divide-y divide-gray-200 bg-white">
    @foreach($table->resource as $itemKey => $item)
        @php $itemPrimaryKey = $table->findPrimaryKey($item) @endphp

        <tr
            @if($table->rowLinks->has($itemKey))
                class="cursor-pointer"
                @click="table.visit(@js($table->rowLinks->get($itemKey)))"
            @endif
            :class="{
                'bg-gray-50': table.striped && @js($itemKey) % 2,
                'hover:bg-gray-100': table.striped,
                'hover:bg-gray-50': !table.striped
            }"
        >
            @if($table->hasBulkActions())
                <td width="64" class="text-xs px-6 py-4">
                    <input
                        @change="(e) => table.setSelectedItem(@js($itemPrimaryKey), e.target.checked)"
                        type="checkbox"
                        class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:opacity-50"
                        :checked="table.itemIsSelected(@js($itemPrimaryKey))"
                        value="{{ $itemPrimaryKey }}"
                    />
                </td>
            @endif

            @foreach($table->columns() as $column)
                <td
                    v-show="table.columnIsVisible(@js($column->key))"
                    class="whitespace-nowrap text-sm px-6 py-4 text-gray-500"
                >
                    @isset(${'spladeTableCell' . $column->key})
                        {{ ${'spladeTableCell' . $column->key}($item, $itemKey) }}
                    @else
                        {!! nl2br(e($getColumnDataFromItem($item, $column))) !!}
                    @endisset
                </td>
            @endforeach
        </tr>
    @endforeach
</tbody>