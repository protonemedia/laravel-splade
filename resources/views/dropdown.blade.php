<SpladeDropdown {{ $attributes->except('class')->merge(['placement' => 'bottom-start']) }}>
    <template #button="dropdown">
      <button
        type="button"
        aria-haspopup="true"
        {{ $attributes->only('class') }}
        :class="{ 'cursor-not-allowed': dropdown.disabled }"
        :disabled="dropdown.disabled"
        @click.prevent="dropdown.toggle"
      >
        {{ $trigger }}
      </button>
    </template>

    <template #default="dropdown">
      <x-splade-transition v-bind:show="dropdown.opened" class="absolute z-40">
        {{ $slot }}
      </x-splade-transition>
    </template>
</SpladeDropdown>