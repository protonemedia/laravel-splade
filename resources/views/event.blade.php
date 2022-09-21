<SpladeEvent :listeners='@json($listeners)' {{ $attributes }}>
    <template #default="{!! $scope !!}">
        {{ $slot }}
    </template>
</SpladeEvent>