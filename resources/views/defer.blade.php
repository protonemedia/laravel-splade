<SpladeDefer {{ $attributes
    ->mergeVueBinding(':manual', $manual)
    ->mergeVueBinding(':poll', $poll)
    ->mergeVueBinding(':watch-debounce', $watchDebounce)
    ->mergeVueBinding(':watch-value', $watchValue)
}}
    @if($data) :default="@js($data)" @else :default="{!! $json !!}" @endif
    @if($requestData) :request="@js($requestData)" @else :request="{!! $requestJson !!}" @endif>
    <template #default="{!! $scope !!}">
        {{ $slot }}
    </template>
</SpladeDefer>