<!--START-SPLADE-MODAL-{{ $key }}-->
<SpladeModal {{ $baseAttributes->mergeVueBinding(':close-button', $closeButton) }}>
    <template #default="modal">
        <x-splade-component is="transition" show="modal.isOpen">
            <component :dusk="`modal.${modal.stack}`" :is="modal.Dialog" @close="modal.setIsOpen" class="relative z-20">
                <!-- The backdrop, rendered as a fixed sibling to the panel container -->
                <component
                    :is="modal.stack === 1 ? modal.TransitionChild : 'div'"
                    enter="ease-in-out duration-300"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="ease-in-out duration-300"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <div
                        v-show="modal.onTopOfStack"
                        class="fixed inset-0 bg-black/75"
                    />
                </component>

                {{ $slot }}
            </component>
        </x-splade-component>
    </template>
</SpladeModal>
<!--END-SPLADE-MODAL-{{ $key }}-->