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
        <div class="absolute z-40">
          <x-dynamic-component :component="Splade::component('transition')" show="dropdown.opened" >
              {{ $slot }}
          </x-dynamic-component>
        </div>
    </template>
</SpladeDropdown>