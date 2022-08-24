@php $data = $formData() @endphp

<SpladeForm {!! $attributes->except('class') !!}
    @if($data['data']) :default="@js($data['data'])" @else :default="{!! $data['json'] !!}" @endif
    :splade-id="@js($spladeId)"
>
    <template #default="{!! $scope !!}">
        <form data-splade-id="{{ $spladeId }}" v-bind="form.$attrs" @submit.prevent="form.submit">
            <fieldset v-bind:disabled="form.processing" {!! $attributes->only('class') !!}>
                {{ $slot }}
            </fieldset>
        </form>
    </template>
</SpladeForm>