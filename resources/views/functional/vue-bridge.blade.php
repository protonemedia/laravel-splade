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
        @php($hasAttributes = (string) $attributes ? true : false)

        @if ($hasAttributes)
            <div {{ $attributes }}>
        @endif

        @isset($originalName)
            @include($originalName, array_merge($originalData, ['slot' => $slot]))
        @else
            {{ isset($component) ? $component : $slot }}
        @endisset

        @if ($hasAttributes)
            </div>
        @endif
    </template>
</SpladeVueBridge>