@php $attributes = $selectChild->attributes() @endphp

@if($selectChild->isGroup())
    <optgroup {{ $attributes }}>
        @foreach($selectChild->getOptions() as $nestedSelectChild)
            @include('splade::form.select-child', ['selectChild' => $nestedSelectChild])
        @endforeach
    </optgroup>
@else
    <option {{ $attributes->except('label') }} @if($selected($attributes->get('value'))) selected @endif>
        {{ $attributes->get('label') }}
    </option>
@endif