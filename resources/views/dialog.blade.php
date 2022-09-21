<SpladeDialog #default="{ Dialog, DialogPanel }">
    <component
        {{ $attributes
            ->mergeVueBinding(':is', $panel ? 'DialogPanel' : 'Dialog')
            ->mergeVueBinding(':open', $open)
            ->mergeVueBinding(':unmount', $unmount)
            ->mergeVueBinding('@close', $close)
        }}
    >
        {{ $slot }}
    </component>
</SpladeDialog>