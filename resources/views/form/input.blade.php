<SpladeInput
    :flatpickr="@js($flatpickrOptions())"
    :js-flatpickr-options="{!! $jsFlatpickrOptions !!}"
    v-model="{{ $vueModel() }}"
>
    <div class="@if($type === 'hidden') hidden @endif @if($label) mt-4 @endif">
        <label class="block">
            @include('splade::form.label', ['label' => $label])

            <input {{ $attributes->class([
                'block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:opacity-50',
                'mt-1' => $label,
            ])->merge([
                'name' => $name,
                'type' => $type,
                'v-model' => $vueModel()
            ]) }}
            />
        </label>

        @includeWhen($showErrors, 'splade::form.error', ['name' => $validationName()])
    </div>
</SpladeInput>