<SpladeIconPicker
    {{ $attributes->only(['v-if', 'v-show', 'class']) }}
    v-model="{{ $vueModel() }}"
    :dusk="@js($attributes->get('dusk'))"
    :label="@js($label)"
/>
@includeWhen($help, 'splade::form.help', ['help' => $help])
@includeWhen($showErrors, 'splade::form.error', ['name' => $validationKey()])
