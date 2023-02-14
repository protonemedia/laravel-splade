<SpladeDynamicHtml
    :keep-alive-key="`dynamicVisit.${$splade.pageVisitId.value}.${$splade.dynamicVisitId.value}`"
    :name="@js($name)"
    {{ $attributes->mergeVueBinding(':passthrough', $passthroughValue()) }}
/>