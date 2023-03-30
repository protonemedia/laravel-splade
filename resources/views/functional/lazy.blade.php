<SpladeLazy :name='@json($name)' {{ $attributes->mergeVueBinding(':show', $show)->mergeVueBinding(':passthrough', $passthroughValue()) }} :url="@js(request()->fullUrl())">
    {{ $placeholder ?? "" }}
</SpladeLazy>