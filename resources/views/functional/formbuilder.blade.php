<x-splade-form
    method="{{ $form->getMethod() }}"
    action="{{ $form->getAction() }}"
    :default="$form->getData()"
    @class($form->getClass())
>

    @foreach($form->getFields() as $field)
        {!! $field->render() !!}
    @endforeach

</x-splade-form>
