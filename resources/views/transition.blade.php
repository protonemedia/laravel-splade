@php $transitionAttributes = [':show', 'v-bind:show', 'enter', 'enter-from', 'enter-to', 'leave', 'leave-from', 'leave-to'] @endphp

<div {{ $attributes->except($transitionAttributes) }}>
    <SpladeTransition #default="{!! $scope !!}">
        <component
            as="div"
            :is="transition.TransitionRoot"
            {{ $attributes->only($transitionAttributes)->merge([
                'enter' => 'transition ease-out duration-200',
                'enter-from' => 'opacity-0 scale-95',
                'enter-to' => 'opacity-100 scale-100',
                'leave' => 'transition ease-in duration-200',
                'leave-from' => 'opacity-100 scale-100',
                'leave-to' => 'opacity-0 scale-95',
            ]) }}
        >
            {{ $slot }}
        </component>
    </SpladeTransition>
</div>