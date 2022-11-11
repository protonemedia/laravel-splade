<SpladeFile
    :form="form"
    :field="@js($formKey())"
    :multiple="@js($multiple)"
    :placeholder="@js($placeholder)"
    :filepond="@js($filepond)"
    :server="@js($server)"
    :preview="@js($preview)"
    v-on:start-uploading="form.$startUploading(@js($uploadKey = Str::uuid()))"
    v-on:stop-uploading="form.$stopUploading(@js($uploadKey))"
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
                    class="inline-block px-3 py-1 rounded-md border border-gray-300 shadow-sm bg-gray-100 hover:bg-gray-300 relative cursor-pointer">

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
                    />
                </a>
            @endif

            @includeWhen($help, 'splade::form.help', ['help' => $help])
        </label>

        @if(!$filepond)
            <div class="mt-2 text-sm italic" v-if="file.filenames.length > 0">
                <p v-for="(filename, key) in file.filenames" v-bind:key="key" v-text="filename" />
            </div>
        @endif

        @includeWhen($showErrors, 'splade::form.error', ['name' => $validationKey()])
    </template>
</SpladeFile>