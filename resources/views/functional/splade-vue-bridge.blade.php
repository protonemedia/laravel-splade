@php $vueData = $_vueData() @endphp

<SpladeVueBridge
    :backend-route="@js(route('splade.withVueBridge'))"
    :default="@js($vueData['data'])"
    :initial-instance="@js($vueData['instance'])"
    :initial-signature="@js($vueData['signature'])"
    :methods="@js($vueData['methods'])"
    :original-url="@js($vueData['url'])"
    :verb="@js($vueData['verb'])"
>
    <template #default="{ {{ $vueData['scope'] }} }">
        @if((string) $attributes)
            <div {{ $attributes }}>{{ isset($component) ? $component : $slot }}</div>
        @else
            {{ isset($component) ? $component : $slot }}
        @endif
    </template>
</SpladeVueBridge>