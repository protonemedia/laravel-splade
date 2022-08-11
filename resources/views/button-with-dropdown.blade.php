<div class="relative" {{ $attributes }}>
  <SpladeButtonWithDropdown placement="bottom-start">
      <template #button="dropdown">
        <button
          type="button"
          {{-- :disabled="disabled" --}}
          class="w-full bg-white border rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          {{-- :class="{'border-green-300': active, 'border-gray-300': !active, 'cursor-not-allowed': disabled }" --}}
          aria-haspopup="true"
          @click.prevent="dropdown.toggle"
        >
          {{ $button }}
        </button>
      </template>

      <template #default="dropdown">
          <div class="absolute z-10">
              <div class="mt-2 min-w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                {{ $slot }}
              </div>
          </div>
      </template>
  </SpladeButtonWithDropdown>
</div>