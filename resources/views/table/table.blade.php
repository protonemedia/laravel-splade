<SpladeTable {{ $attributes->except('class') }}
    :striped="@js($striped)"
    :columns="@js($table->columns())"
    :default-visible-toggleable-columns="@js($table->defaultVisibleToggleableColumns())"
>
    <template #default="{!! $scope !!}">
        <div {{ $attributes->only('class') }}>
            @if($hasControls())
                @include('splade::table.controls')
            @endif

            @foreach($table->searchInputs() as $searchInput)
                @includeUnless($searchInput->key === 'global', 'splade::table.search-row')
            @endforeach

            <x-splade-component is="table-wrapper">
                <table class="min-w-full divide-y divide-gray-200 bg-white">
                    @unless($headless)
                        @isset($head)
                            {{ $head }}
                        @else
                            @include('splade::table.head')
                        @endisset
                    @endunless

                    @isset($body)
                        {{ $body }}
                    @else
                        @include('splade::table.body')
                    @endisset
                </table>
            </x-splade-component>

            @if($isPaginated())
                {{ $table->resource->links($paginationView, ['table' => $table, 'hasPerPageOptions' => $hasPerPageOptions()]) }}
            @endif
        </div>
    </template>
</SpladeTable>