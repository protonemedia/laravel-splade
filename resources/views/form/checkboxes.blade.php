<x-splade-component is="group" :name="$name" :inline="$inline" :help="$help" {{ $attributes }}>
    <x-slot:label>{{ $label }}</x-slot:label>

    @foreach($options as $value => $label)
        <x-splade-component
            is="checkbox"
            :name="$name . '[]'"
            :validation-key="$name . '.' . $loop->index"
            :label="$label"
            :value="$value" />
    @endforeach
</x-splade-component>