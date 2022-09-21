<!--START-SPLADE-MODAL-{{ $key }}-->
<SpladeModal {{ $baseAttributes->mergeVueBinding(':close-button', $closeButton) }}>
    <template #default="modal">
        <x-dynamic-component :component="Splade::component('transition')" as="template" show="modal.isOpen">
            <component :dusk="`modal.${modal.stack}`" :is="modal.Dialog" as="div" @close="modal.setIsOpen" class="relative z-20">
                <!-- The backdrop, rendered as a fixed sibling to the panel container -->
                <component
                    :is="modal.stack === 1 ? modal.TransitionChild : 'div'"
                    as="template"
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
        </x-dynamic-component>
    </template>
</SpladeModal>
<!--END-SPLADE-MODAL-{{ $key }}-->