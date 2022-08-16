<SpladeForm {!! $attributes !!}
    @if($eloquentData = once(fn() => $eloquentData())) :default="@js($eloquentData)" @elseif($data) :default="@js($data)" @else :default="{!! $json !!}" @endif>
    <template #default="{!! $scope !!}">
        <form v-bind="form.$attrs" @submit.prevent="form.submit">
            {{ $slot }}
        </form>
    </template>
</SpladeForm>