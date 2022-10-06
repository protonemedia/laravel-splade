<SpladeDialog #default="{ Dialog, DialogPanel, isActivated: isActivated{{ $spladeId }} }">
    <component
        {{ $attributes
            ->mergeVueBinding(':is', $panel ? 'DialogPanel' : 'Dialog')
            ->mergeVueBinding(':open', $open ? ('(' . e($open) . ') && isActivated' . $spladeId) : '', escape: false)
            ->mergeVueBinding(':unmount', $unmount)
            ->mergeVueBinding('@close', $close)
        }}
    >
        {{ $slot }}
    </component>
</SpladeDialog>