<div class="@if($label) mt-4 @endif">
    <label class="block">
        @include('splade::form.label', ['label' => $label])

        <SpladeTextarea
            :autosize="@js($attributes->has('autosize') ? (bool) $attributes->get('autosize') : $defaultAutosize)"
            :value="form.{{ $name }}"
        >
            <textarea {{ $attributes->except('autosize')->class([
                'block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:opacity-50',
                'mt-1' => $label,
            ])->merge([
                'name' => $name,
                'v-model' => $vueModel()
            ]) }}
            />
        </SpladeTextarea>
    </label>

    @includeWhen($showErrors, 'splade::form.error', ['name' => $validationName()])
</div>