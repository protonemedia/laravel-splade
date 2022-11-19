<SpladeDropdown {{ $attributes->except('class')
    ->mergeVueBinding(':inline', $inline)
    ->mergeVueBinding(':teleport', $teleport)
    ->mergeVueBinding(':close-on-click', $closeOnClick)
}} :splade-id="@js($spladeId)">
    <template #button="dropdown">
        <button
            type="button"
            aria-haspopup="true"
            {{ $attributes->only('class')->when($inline && !$attributes->has('class'), fn($attributes) => $attributes->class('inline')) }}
            :class="{ 'cursor-not-allowed': dropdown.disabled }"
            :disabled="dropdown.disabled"
            @click.prevent="dropdown.toggle"
        >
            {{ $trigger }}
        </button>
    </template>

    <template #default="dropdown">
        <x-splade-component :is="$teleport ? 'teleport' : 'slot'" to="body">
            <div data-splade-dropdown-id="{{ $spladeId }}" class="absolute z-40">
                <x-splade-component is="transition" show="dropdown.opened">
                    {{ $slot }}
                </x-splade-component>
            </div>
        </x-splade-component>
    </template>
</SpladeDropdown>