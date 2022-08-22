<SpladeInput
    {{ $attributes->only(['v-if', 'v-show', 'class'])->class(['hidden' => $isHidden()]) }}
    :flatpickr="@js($flatpickrOptions())"
    :js-flatpickr-options="{!! $jsFlatpickrOptions !!}"
    v-model="{{ $vueModel() }}"
>
    <label class="block">
        @include('splade::form.label', ['label' => $label])

        <input {{ $attributes->except(['v-if', 'v-show', 'class'])->class([
            'block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:opacity-50',
            'mt-1' => $label,
        ])->merge([
            'name' => $name,
            'type' => $type,
            'v-model' => $flatpickrOptions() ? null : $vueModel()
        ]) }}
        />
    </label>

    @includeWhen($showErrors, 'splade::form.error', ['name' => $validationKey()])
</SpladeInput>