@php $data = $formData() @endphp

<SpladeForm {!! $attributes->except('class') !!}
    @if($data['data']) :default="@js($data['data'])" @else :default="{!! $data['json'] !!}" @endif
>
    <template #default="{!! $scope !!}">
        <form v-bind="form.$attrs" @submit.prevent="form.submit">
            <fieldset v-bind:disabled="form.processing" {!! $attributes->only('class') !!}>
                {{ $slot }}
            </fieldset>
        </form>
    </template>
</SpladeForm>