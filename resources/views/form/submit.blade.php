@php $customStyling = $hasCustomStyling($attributes) @endphp

<button {{ $attributes->class([
    'border rounded-md shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50',
    'bg-indigo-500 hover:bg-indigo-700 text-white border-transparent focus:border-indigo-300 focus:ring-indigo-200' => !$customStyling && $primary,
    'bg-red-500 hover:bg-red-700 text-white border-transparent focus:border-red-700 focus:ring-red-200' => !$customStyling && $danger,
    'bg-white hover:bg-gray-100 text-gray-700 border-gray-300 focus:border-indigo-300 focus:ring-indigo-200' => !$customStyling && $secondary,
])->merge([
    'type' => $type
])->when($name, fn($attr) => $attr->merge(['name' => $name, 'value' => $value])) }}
>
    @if(trim($slot))
        {{ $slot }}
    @else
        <div class="flex flex-row items-center justify-center">
            <svg
                v-if="@js($spinner) && form.processing"
                class="animate-spin mr-3 h-5 w-5 @if($secondary) text-gray-700 @else text-white @endif" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            >
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>

            <span :class="{ 'opacity-50': form.processing || form.$uploading }">
                {{ $label }}
            </span>
        </div>
    @endif
</button>