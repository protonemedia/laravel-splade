<SpladeRehydrate :name='@json($name)' {{ $attributes->mergeVueBinding(':on', json_encode($on))->mergeVueBinding(':passthrough', $passthroughValue()) }}>
    {{ $slot ?? "" }}
</SpladeRehydrate>