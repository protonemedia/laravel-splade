<SpladeForm {!! $attributes !!}
    @if($data) :default="@js($data)" @else :default="{!! $json !!}" @endif>
    <template #default="{!! $scope !!}">
        <form @submit.prevent="form.submit">
            {{ $slot }}
        </form>
    </template>
</SpladeForm>