<SpladeRehydrate :name='@json($name)' {{ $attributes->mergeVueBinding(':on', json_encode($on)) }}>
    {{ $slot ?? "" }}
</SpladeRehydrate>