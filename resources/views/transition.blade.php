@php $transitionAttributes = [':show', 'v-bind:show', 'enter', 'enter-from', 'enter-to', 'leave', 'leave-from', 'leave-to'] @endphp

<div {{ $attributes->only($transitionAttributes) }}>
    <SpladeTransition #default="{!! $scope !!}">
        <component
            as="div"
            :is="transition.TransitionRoot"
            {{ $attributes->only($transitionAttributes)->merge([
                ':show' => $show,
                ...$animation->toArray()
            ]) }}
        >
            {{ $slot }}
        </component>
    </SpladeTransition>
</div>