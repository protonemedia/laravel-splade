<x-dynamic-component :component="$groupName" :name="$name" :label="$label" :inline="$inline" :help="$help">
    @foreach($options as $value => $label)
        <x-dynamic-component :component="$radioName" :name="$name" :label="$label" :value="$value" />
    @endforeach
</x-dynamic-component>