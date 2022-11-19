<SpladeData {{ $attributes }}
    @if($data) :default="@js($data)" @else :default="{!! $json !!}" @endif>
    <template #default="{!! $scope !!}">
        {{ $slot }}
    </template>
</SpladeData>