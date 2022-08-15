<SpladeSelect
    :choices="@js($choicesOptions())"
    :js-choices-options="{!! $jsChoicesOptions() !!}"
    :multiple="@js($multiple)"
    :placeholder="@js($placeholder ? true : false)"
    v-model="{{ $vueModel() }}"
>
    <div class="@if($label) mt-4 @endif">
        <label class="block">
            @include('splade::form.label', ['label' => $label])

            <select {{ $attributes->class([
                'block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:opacity-50',
                'mt-1' => $label,
            ])->merge([
                'multiple' => $multiple,
                'name' => $name,
                'v-model' => $vueModel()
            ]) }}
            >
                @foreach($options() as $selectChild)
                    @include('splade::form.select-child', ['selectChild' => $selectChild])
                @endforeach
            </select>
        </label>

        @includeWhen($showErrors, 'splade::form.error', ['name' => $validationName()])
    </div>
</SpladeSelect>