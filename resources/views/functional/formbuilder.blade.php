<x-splade-form
    method="{{ $form->method }}"
    action="{{ $form->action }}"
    :default="$form->data"
    @class($form->class ?? [])
>

    @foreach($form->getFields() as $field)
        {!! $field->render() !!}
    @endforeach

</x-splade-form>
