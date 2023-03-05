<x-splade-form
    method="{{ $form->getMethod() }}"
    action="{{ $form->getAction() }}"
    :default="$form->getData()"
    @class($form->getClass())
    id="{{ $form->getName() }}"

    :confirm="$form->getOption('confirm')"
    :confirm-danger="$form->getOption('confirm_danger')"
    :confirm-text="$form->getOption('text')"
    :confirm-button="$form->getOption('confirm_button')"
    :cancel-button="$form->getOption('cancel_button')"
    :require-password="$form->getOption('require_password')"
    :require-password-once="$form->getOption('require_password_once')"

    :submit-on-change="$form->getOption('submit_on_change')"
    :background="$form->getOption('background')"
    :debounce="$form->getOption('debounce')"

    :stay="$form->getOption('stay')"
>

    @foreach($form->getFields() as $field)
        {!! $field->render() !!}
    @endforeach

    {{ $slot ?? '' }}

</x-splade-form>
