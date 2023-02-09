<x-splade-component is="group" :name="$name" :inline="$inline" :help="$help" {{ $attributes }}>
    <x-slot:label>{{ $label }}</x-slot:label>

    @foreach($options as $value => $label)
        <x-splade-component is="radio" :name="$name" :label="$label" :value="$value" />
    @endforeach
</x-splade-component>