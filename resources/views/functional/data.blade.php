<SpladeData {{ $attributes }}
    @if($data) :default="@js($data)" @else :default="{!! $json !!}" @endif :remember="@js($remember)" :local-storage="@js($localStorage)">
    @unless($store)
        <template #default="{!! $scope !!}">
            {{ $slot }}
        </template>
    @endunless
</SpladeData>