<x-splade-form
    method="{{ $for->getMethod() }}"
    action="{{ $for->getAction() }}"
    :default="$for->getData()"
    @class($for->getClass())
>

    @foreach($for->getFields() as $field)
        {!! $field->render() !!}
    @endforeach

    {{ $slot ?? '' }}

</x-splade-form>
