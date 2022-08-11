<tbody class="divide-y divide-gray-200 bg-white">
    @foreach($table->resource as $itemKey => $item)
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
            @foreach($table->columns() as $column)
                <td
                    v-show="table.columnIsVisible(@js($column->key))"
                    class="whitespace-nowrap text-sm px-6 py-4 text-gray-500"
                >
                    @isset(${'spladeTableCell' . $column->key})
                        {{ ${'spladeTableCell' . $column->key}($item, $itemKey) }}
                    @else
                        {{ data_get($item, $column->key) }}
                    @endisset
                </td>
            @endforeach
        </tr>
    @endforeach
</tbody>