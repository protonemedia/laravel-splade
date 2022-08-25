<SpladeInput
    {{ $attributes->only(['v-if', 'v-show', 'class'])->class(['hidden' => $isHidden()]) }}
    :flatpickr="@js($flatpickrOptions())"
    :js-flatpickr-options="{!! $jsFlatpickrOptions !!}"
    v-model="{{ $vueModel() }}"
    #default="inputScope"
>
    <label class="block">
        @includeWhen($label, 'splade::form.label', ['label' => $label])

        <div class="flex rounded-md shadow-sm">
            @if($prepend)
                <span :class="{ 'opacity-50': inputScope.disabled }" class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                    {!! $prepend !!}
                </span>
            @endif

            <input {{ $attributes->except(['v-if', 'v-show', 'class'])->class([
                'block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:opacity-50',
                'rounded-md' => !$append && !$prepend,
                'min-w-0 flex-1 rounded-none' => $append || $prepend,
                'rounded-l-md' => $append && !$prepend,
                'rounded-r-md' => !$append && $prepend,
            ])->merge([
                'name' => $name,
                'type' => $type,
                'v-model' => $flatpickrOptions() ? null : $vueModel()
            ]) }}
            />

            @if($append)
                <span :class="{ 'opacity-50': inputScope.disabled }" class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500">
                    {!! $append !!}
                </span>
            @endif
        </div>
    </label>

    @include('splade::form.help', ['help' => $help])
    @includeWhen($showErrors, 'splade::form.error', ['name' => $validationKey()])
</SpladeInput>