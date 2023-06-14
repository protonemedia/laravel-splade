<thead class="bg-gray-50">
    <tr>
        @if($hasBulkActions = $table->hasBulkActions())
            <th width="64" class="px-6 py-3 text-xs">
                @include('splade::table.select-rows-dropdown')
            </th>
        @endif

        @foreach($table->columns() as $column)
            <th
                v-show="table.columnIsVisible(@js($column->key))"
                class="@if($loop->first && $hasBulkActions) pr-6 @else px-6 @endif py-3 text-left text-xs font-medium tracking-wide text-gray-500 {{ $column->classes }}"
            >
                @if($column->sortable)
                    <Link keep-modal dusk="sort-{{ $column->key }}" href="{{ $sortBy($column) }}">
                @endif

                <span class="flex flex-row items-center @if($column->alignment == 'right') justify-end @elseif($column->alignment == 'center') justify-center @else justify-start @endif">
                    <span class="uppercase">{{ $column->label }}</span>

                    @if($column->sortable)
                        <svg aria-hidden="true" class="w-3 h-3 ml-2 @if($column->sorted) text-green-500 @else text-gray-400 @endif" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            @if(!$column->sorted)
                                <path fill="currentColor" d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z" />
                            @elseif($column->sorted === 'asc')
                                <path fill="currentColor" d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z" />
                            @elseif($column->sorted === 'desc')
                                <path fill="currentColor" d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z" />
                            @endif
                        </svg>
                    @endif
                </span>

                @if($column->sortable)
                    </Link>
                @endif
            </th>
        @endforeach
    </tr>
</thead>