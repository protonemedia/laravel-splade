<x-dynamic-component :component="$groupComponent" :name="$name" :label="$label" :inline="$inline" :help="$help">
    @foreach($options as $value => $label)
        <x-dynamic-component :component="$radioComponent" :name="$name" :label="$label" :value="$value" />
    @endforeach
</x-dynamic-component>