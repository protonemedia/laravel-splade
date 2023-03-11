@php
    $flatpickrOptions = $flatpickrOptions();
    $hasPrepend = $prepend || $prependIcon;
    $hasAppend = $append || $appendIcon;
@endphp

<SpladeInput
    {{ $attributes->only(['v-if', 'v-show', 'v-for', 'class'])->class(['hidden' => $isHidden()]) }}
    :flatpickr="@js($flatpickrOptions)"
    :js-flatpickr-options="{!! $jsFlatpickrOptions !!}"
    v-model="{{ $vueModel() }}"
    #default="inputScope"
>
    <label class="block">
        @includeWhen($label, 'splade::form.label', ['label' => $label])

        <div class="flex rounded-md border border-gray-300 shadow-sm">
            @if($hasPrepend)
                <span :class="{ 'opacity-50': inputScope.disabled && @json(!$alwaysEnablePrepend) }" class="inline-flex items-center space-x-1 rounded-l-md border border-t-0 border-b-0 border-l-0 border-gray-300 bg-gray-50 px-3 text-gray-500">
                    @if($prependIcon)<x-icon :name="$prependIcon" class="w-5 h-5" />@endif
                    @if($prepend)<span>{!! $prepend !!}</span>@endif
                </span>
            @endif

            <input {{ $attributes->except(['v-if', 'v-show', 'v-for', 'class'])->class([
                'block w-full border-0 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed',
                'rounded-md' => !$hasAppend && !$hasPrepend,
                'min-w-0 flex-1 rounded-none' => $hasAppend || $hasPrepend,
                'rounded-l-md' => $hasAppend && !$hasPrepend,
                'rounded-r-md' => !$hasAppend && $hasPrepend,
            ])->merge([
                'name' => $name,
                'type' => $type,
                'data-validation-key' => $validationKey(),
            ])->when(!$flatpickrOptions, fn($attributes) => $attributes->merge([
                'v-model' => $vueModel(),
            ])) }}
            />

            @if($hasAppend)
                <span :class="{ 'opacity-50': inputScope.disabled && @json(!$alwaysEnableAppend) }" class="inline-flex items-center space-x-1 rounded-r-md border border-t-0 border-b-0 border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500">
                    @if($appendIcon)<x-icon :name="$appendIcon" class="w-5 h-5" />@endif
                    @if($append)<span>{!! $append !!}</span>@endif
                </span>
            @endif
        </div>
    </label>

    @include('splade::form.help', ['help' => $help])
    @includeWhen($showErrors, 'splade::form.error', ['name' => $validationKey()])
</SpladeInput>