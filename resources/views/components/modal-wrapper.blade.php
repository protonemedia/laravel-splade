<!--START-SPLADE-MODAL-{{ $key }}-->
<SpladeModal {{ $baseAttributes->mergeVueBinding(':close-button', $closeButton) }} :name="@js($name)">
    <template #default="modal">
        <x-splade-component is="transition" show="modal.isOpen">
            <x-splade-component is="dialog" v-bind:dusk="`modal.${modal.stack}`" close="{{ $closeExplicitly ? '' : 'modal.setIsOpen' }}" class="relative z-20">
                <!-- The backdrop, rendered as a fixed sibling to the panel container -->
                <x-splade-component
                    is="transition" child
                    v-if="modal.stack === 1 && modal.animate"
                    animation="opacity">
                    <div v-show="modal.onTopOfStack" class="fixed z-30 inset-0 bg-black/75" />
                </x-splade-component>

                <div
                    v-if="(modal.stack === 1 && !modal.animate) || (modal.stack > 1 && modal.onTopOfStack)"
                    class="fixed z-30 inset-0 bg-black/75"
                />

                {{ $slot }}
            </x-splade-component>
        </x-splade-component>
    </template>
</SpladeModal>
<!--END-SPLADE-MODAL-{{ $key }}-->