<div {{ $attributes->only(['v-if', 'v-show', 'class'])->merge([
    'data-validation-key' => $validationKey(),
]) }}>
    @includeWhen($label, 'splade::form.label', ['label' => $label])

    <div {{ $attributes->except(['v-if', 'v-show', 'class'])->class([
        'flex flex-wrap space-x-6' => $inline,
        'space-y-1' => !$inline,
    ]) }}
    >
      {{ $slot }}
    </div>

    @includeWhen($help, 'splade::form.help', ['help' => $help])
    @includeWhen($showErrors, 'splade::form.error', ['name' => $validationKey()])
</div>