<span class="block mb-1 text-gray-700 font-sans">
    {!! $label  !!}
    @if($attributes->has('required') || $attributes->has('data-required'))
        <span class="text-red-500" title="{{ __('This field is required') }}">*</span>
    @endif
</span>
