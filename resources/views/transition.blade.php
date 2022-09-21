<SpladeTransition #default="{ TransitionRoot, TransitionChild }">
    <component
        {{ $attributes
            ->merge($animation->toArray())
            ->mergeVueBinding(':is', $child ? 'TransitionChild' : 'TransitionRoot')
            ->mergeVueBinding(':show', $show)
            ->mergeVueBinding(':appear', $appear)
            ->mergeVueBinding(':unmount', $unmount)
            ->mergeVueBinding('@after-leave', $afterLeave)
        }}
    >
        {{ $slot }}
    </component>
</SpladeTransition>