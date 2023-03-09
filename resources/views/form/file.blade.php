<SpladeFile
    :form="form"
    :field="@js($formKey())"
    :multiple="@js($multiple)"
    :placeholder="@js($placeholder)"
    :filepond="@js($filepondOptions())"
    :js-filepond-options="{!! $jsFilepondOptions() !!}"
    :server="@js($server)"
    :preview="@js($preview)"
    :accept="@js($accept)"
    :existing-suffix="@js($existingSuffix)"
    :order-suffix="@js($orderSuffix)"
    :min-file-size="@js($minSize)"
    :max-file-size="@js($maxSize)"
    :min-image-width="@js($minWidth)"
    :max-image-width="@js($maxWidth)"
    :min-image-height="@js($minHeight)"
    :max-image-height="@js($maxHeight)"
    :min-image-resolution="@js($minResolution)"
    :max-image-resolution="@js($maxResolution)"
    v-on:start-uploading="form.$startUploading"
    v-on:stop-uploading="form.$stopUploading"
    :dusk="@js($attributes->get('dusk'))"
    {{ $attributes->only(['v-if', 'v-show', 'class']) }}
>
    <template #default="{!! $scope !!}">
        <label class="block">
            @includeWhen($label, 'splade::form.label', ['label' => $label])

            @if($filepond)
                <input {{ $attributes->except(['v-if', 'v-show', 'class'])->merge([
                    'name' => $name,
                    'multiple' => $multiple,
                    'type' => 'file',
                    'data-validation-key' => $validationKey(),
                ]) }}
                />
            @else
                <a @submit.prevent
                    class="inline-block py-2 px-3 rounded-md border border-gray-300 shadow-sm bg-white hover:bg-gray-100 relative cursor-pointer font-medium text-gray-700 text-sm focus:outline-none focus:ring focus:ring-opacity-50 focus:border-indigo-300 focus:ring-indigo-200 text-center">

                    @if(trim($slot))
                        {{ $slot }}
                    @else
                        {{ $placeholder }}
                    @endif

                    <input @change="file.handleFileInput" {{ $attributes->except(['v-if', 'v-show', 'class'])->class([
                        'invisible absolute inset-0 w-full h-full disabled:opacity-50'
                    ])->merge([
                        'name' => $name,
                        'multiple' => $multiple,
                        'type' => 'file',
                        'data-validation-key' => $validationKey(),
                    ]) }}
                        @if(count($accept) > 0)
                            accept="{{ implode(',', $accept) }}"
                        @endif
                    />
                </a>
            @endif

            @includeWhen($help, 'splade::form.help', ['help' => $help])
        </label>

        @if(!$filepond && $showFilename)
            <div class="mt-2 text-sm italic" v-if="file.filenames.length > 0">
                <p v-for="(filename, key) in file.filenames" v-bind:key="key" v-text="filename" />
            </div>
        @endif

        @includeWhen($showErrors, 'splade::form.error', ['name' => $validationKey()])
    </template>
</SpladeFile>