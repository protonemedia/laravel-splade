<x-splade-component is="group" :name="$name" :label="$label" :inline="$inline" :help="$help">
    @foreach($options as $value => $label)
        <x-splade-component
            is="checkbox"
            :name="$name . '[]'"
            :validation-key="$name . '.' . $loop->index"
            :label="$label"
            :value="$value" />
    @endforeach
</x-splade-component>