<tbody class="divide-y divide-gray-200 bg-white">
    @foreach($table->resource as $itemKey => $item)
        <tr @click="table.visit(@js($table->rowLinks->get($itemKey)))">
            @foreach($table->columns() as $column)
                <td
                    v-show="table.columnIsVisible(@js($column->key))"
                    class="whitespace-nowrap text-sm px-6 py-4 text-gray-500">
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