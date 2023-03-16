@php $data = $formData() @endphp

<SpladeForm {{ $attributes->rejectWhenBlank('id')->except('class') }}
    @if($data['data']) :default="@js($data['data'])" @else :default="{!! $data['json'] !!}" @endif
    :scroll-on-error="@js($scrollOnError)"
    :splade-id="@js($spladeId)"
    :submit-on-change="@js($submitOnChange)"
    :escape-validation-messages="@js($escapeValidationMessages)"
    :preserve-scroll="@js($preserveScroll)"
    :background="@js($background)"
    :debounce="@js($debounce)"
    :accept-header="@js($acceptHeader)"
>
    <template #default="{!! $scope !!}">
        <form data-splade-id="{{ $spladeId }}" v-bind="form.$attrs" @submit.prevent="form.submit" {{ $attributes->only(['action', 'method'])->merge(['method' => 'POST']) }}>
            <fieldset v-bind:disabled="form.processing" {{ $attributes->only('class') }}>
                {{ $slot }}
            </fieldset>
        </form>
    </template>
</SpladeForm>