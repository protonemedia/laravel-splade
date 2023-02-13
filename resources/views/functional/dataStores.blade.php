<SpladeDataStores
    :remember="@js($remember)"
    :local-storage="@js($localStorage)"
    :parsed="@js($parsed)"
    :raw="{
        @foreach($raw as $store => $rawJson)
            @js($store): {!! $rawJson !!}@if(!$loop->last),@endif
        @endforeach
    }"
>
    <template #default="{ {!! $scopes !!} }">
        {{ $slot }}
    </template>
</SpladeDataStores>