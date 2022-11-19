<SpladeToggle :default='@json($toggles)'>
    <template #default="{ {{ $props }} }">
        {{ $slot }}
    </template>
</SpladeToggle>