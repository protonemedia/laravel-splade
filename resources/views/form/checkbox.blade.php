<div {{ $attributes->only(['v-if', 'v-show', 'class']) }}>
    <label class="flex items-center">
        <input {{ $attributes->except(['v-if', 'v-show', 'class'])->class([
            'rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:opacity-50'
        ])->merge([
            'name' => $name,
            'value' => $value,
            'type' => 'checkbox',
            'v-model' => $vueModel()
        ]) }}
        />

        <span class="ml-2">
            @if(trim($slot))
                {{ $slot }}
            @else
                {{ $label }}
            @endif
        </span>
    </label>

    @includeWhen($showErrors, 'splade::form.error', ['name' => $validationKey()])
</div>


