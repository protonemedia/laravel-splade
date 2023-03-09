<SpladeLazy :name='@json($name)' {{ $attributes->mergeVueBinding(':show', $show)->mergeVueBinding(':passthrough', $passthroughValue()) }}>
    {{ $placeholder ?? "" }}
</SpladeLazy>