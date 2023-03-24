<SpladeTransition #default="{ TransitionRoot, TransitionChild }">
    <component
        {{ $attributes
            ->mergeVueBinding('enter', "{$animate} ? '{$animation->enter}' : ''")
            ->mergeVueBinding('enter-from', "{$animate} ? '{$animation->enterFrom}' : ''")
            ->mergeVueBinding('enter-to', "{$animate} ? '{$animation->enterTo}' : ''")
            ->mergeVueBinding('leave', "{$animate} ? '{$animation->leave}' : ''")
            ->mergeVueBinding('leave-from', "{$animate} ? '{$animation->leaveFrom}' : ''")
            ->mergeVueBinding('leave-to', "{$animate} ? '{$animation->leaveTo}' : ''")
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