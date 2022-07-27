<SpladeDefer {!! $attributes !!}
    @if($data) :default="@js($data)" @else :default="{!! $json !!}" @endif
    @if($requestData) :request="@js($requestData)" @else :request="{!! $requestJson !!}" @endif>
    <template #default="{!! $scope !!}">
        {{ $slot }}
    </template>
</SpladeDefer>