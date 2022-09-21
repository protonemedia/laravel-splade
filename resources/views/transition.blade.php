<SpladeTransition #default="{!! $scope !!}">
    <component
        {{ $attributes
            ->merge($animation->toArray())
            ->mergeVueBinding(':is', $child ? 'transition.TransitionChild' : 'transition.TransitionRoot')
            ->mergeVueBinding(':show', $show)
            ->mergeVueBinding(':appear', $appear)
            ->mergeVueBinding(':unmount', $unmount)
            ->mergeVueBinding('@after-leave', $afterLeave)
        }}
    >
        {{ $slot }}
    </component>
</SpladeTransition>