<x-dynamic-component :component="Splade::component('group')" :name="$name" :label="$label" :inline="$inline" :help="$help">
    @foreach($options as $value => $label)
        <x-dynamic-component :component="Splade::component('radio')" :name="$name" :label="$label" :value="$value" />
    @endforeach
</x-dynamic-component>