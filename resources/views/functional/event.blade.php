<SpladeEvent :listeners='@json($listeners)' :preserve-scroll='@js($preserveScroll)' {{ $attributes }}>
    <template #default="{!! $scope !!}">
        {{ $slot }}
    </template>
</SpladeEvent>