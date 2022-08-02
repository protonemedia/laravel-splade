<SpladeForm {!! $attributes !!}
    @if($data) :default="@js($data)" @else :default="{!! $json !!}" @endif>
    <template #default="{!! $scope !!}">
        <form v-bind="form.$attrs" @submit.prevent="form.submit">
            {{ $slot }}
        </form>
    </template>
</SpladeForm>