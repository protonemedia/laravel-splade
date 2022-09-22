<SpladeLazy :name='@json($name)' {{ $attributes->mergeVueBinding(':show', $show) }}>
    {{ $placeholder ?? "" }}
</SpladeLazy>