<div {{ $attributes->only(['v-if', 'v-show']) }}>
    @include('splade::form.label', ['label' => $label])

    <div {{ $attributes->except(['v-if', 'v-show'])->class([
        'mt-2' => $label,
        'flex flex-wrap space-x-6' => $inline,
        'space-y-1' => !$inline,
    ]) }}
    >
      {{ $slot }}
    </div>

    @includeWhen($showErrors, 'splade::form.error', ['name' => $validationKey()])
</div>