<SpladeSelect
    {{ $attributes->only(['v-if', 'v-show', 'class']) }}
    :choices="@js($choicesOptions())"
    :js-choices-options="{!! $jsChoicesOptions() !!}"
    :multiple="@js($multiple)"
    :placeholder="@js($placeholder ? true : false)"
    v-model="{{ $vueModel() }}"
>
    <label class="block">
        @includeWhen($label, 'splade::form.label', ['label' => $label])

        <select {{ $attributes->except(['v-if', 'v-show', 'class'])->class([
            'block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:opacity-50',
        ])->merge([
            'multiple' => $multiple,
            'name' => $name,
            'v-model' => $vueModel()
        ]) }}
        >
            @if(trim($slot))
                {{ $slot }}
            @else
                @foreach($options() as $selectChild)
                    @include('splade::form.select-child', ['selectChild' => $selectChild])
                @endforeach
            @endif
        </select>
    </label>

    @includeWhen($help, 'splade::form.help', ['help' => $help])
    @includeWhen($showErrors, 'splade::form.error', ['name' => $validationKey()])
</SpladeSelect>