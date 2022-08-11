<SpladeTable {!! $attributes !!}
    :striped="@js($striped)"
    :columns="@js($table->columns())"
    :default-visible-toggleable-columns="@js($table->defaultVisibleToggleableColumns())"
>
    <template #default="{!! $scope !!}">
        @if($hasControls())
            @include('splade::table.controls')
        @endif

        @foreach($table->searchInputs() as $searchInput)
            @includeUnless($searchInput->key === 'global', 'splade::table.search-row')
        @endforeach

        <x-dynamic-component :component="$wrapperName">
            <table class="min-w-full divide-y divide-gray-200 bg-white">
                @isset($head)
                    {{ $head }}
                @else
                    @include('splade::table.head')
                @endisset

                @isset($body)
                    {{ $body }}
                @else
                    @include('splade::table.body')
                @endisset
            </table>
        </x-dynamic-component>

        @if($isPaginated())
            {{ $table->resource->links($paginationView, ['table' => $table]) }}
        @endif
    </template>
</SpladeTable>