<div class="mt-4">
    @include('splade::form.label', ['label' => $label])

    <div {{ $attributes->class([
        'mt-2' => $label,
        'flex flex-wrap space-x-6' => $inline,
        'space-y-1' => !$inline,
    ]) }}
    >
      {{ $slot }}
    </div>

    @includeWhen($showErrors, 'splade::form.error', ['name' => $validationName()])
</div>