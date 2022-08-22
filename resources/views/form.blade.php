@php $data = $formData() @endphp

<SpladeForm {!! $attributes !!}
    @if($data['data']) :default="@js($data['data'])" @else :default="{!! $data['json'] !!}" @endif
>
    <template #default="{!! $scope !!}">
        <form v-bind="form.$attrs" @submit.prevent="form.submit">
            {{ $slot }}
        </form>
    </template>
</SpladeForm>