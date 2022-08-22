<SpladeTextarea
    {{ $attributes->only(['v-if', 'v-show', 'class']) }}
    :autosize="@js($attributes->has('autosize') ? (bool) $attributes->get('autosize') : $defaultAutosizeValue)"
    v-model="{{ $vueModel() }}"
>
    <label class="block">
        @include('splade::form.label', ['label' => $label])

        <textarea {{ $attributes->except(['v-if', 'v-show', 'class', 'autosize'])->class([
            'block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:opacity-50',
            'mt-1' => $label,
        ])->merge([
            'name' => $name,
            'v-model' => $vueModel()
        ]) }}
        />
    </label>

    @includeWhen($showErrors, 'splade::form.error', ['name' => $validationKey()])
</SpladeTextarea>