<SpladeFile
    :form="form"
    :field="@js($formKey())"
    :multiple="@js($multiple)"
    {{ $attributes->only(['v-if', 'v-show', 'class']) }}
>
    <template #default="{!! $scope !!}">
        <label class="block">
            @includeWhen($label, 'splade::form.label', ['label' => $label])

            <component
                :is="file.filepond"
                v-if="file.filepond"
                :name="@js($name)"
                ref="pond"
                label-idle="Drop files here..."
                v-bind:allow-multiple="true"
                accepted-file-types="image/jpeg, image/png"
                v-bind:files="file.filepondFiles"
                :multiple="@js($multiple)"
                v-on:addfile="file.addFilepondFile"
            />

            <div v-else>
                <a @submit.prevent
                    class="inline-block px-3 py-1 rounded-md border border-gray-300 shadow-sm bg-gray-100 hover:bg-gray-300 relative cursor-pointer">

                    @if(trim($slot))
                        {{ $slot }}
                    @else
                        {{ __('Browse...') }}
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

                @includeWhen($help, 'splade::form.help', ['help' => $help])
            </div>
        </label>

        <div class="mt-2 text-sm italic" v-if="file.filenames.length > 0">
            <p v-for="(filename, key) in file.filenames" v-bind:key="key" v-text="filename" />
        </div>

        @includeWhen($showErrors, 'splade::form.error', ['name' => $validationKey()])
    </template>
</SpladeFile>