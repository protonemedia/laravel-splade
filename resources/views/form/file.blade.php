<SpladeFile
    :form="form"
    :field="@js($formKey())"
    :multiple="@js($multiple)"
    {{ $attributes->only(['v-if', 'v-show', 'class']) }}
>
    <template #default="{!! $scope !!}">
        <label class="block">
            @include('splade::form.label', ['label' => $label])

            <div class="@if($label) mt-1 @endif">
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
                    ]) }}
                    />
                </a>

                <div class="mt-2 text-sm italic">
                    <p v-for="(filename, key) in file.filenames" v-bind:key="key" v-text="filename" />
                </div>
            </div>
        </label>

        @includeWhen($showErrors, 'splade::form.error', ['name' => $validationKey()])
    </template>
</SpladeFile>