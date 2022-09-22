@foreach($notifications as $notification)
    <p>{{ $notification }}</p>
@endforeach

<x-splade-form>
    <x-splade-input name="date" date />
</x-splade-form>