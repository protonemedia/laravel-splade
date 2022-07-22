<SpladeToasts>
    <template #default="toasts">
        <component :is="toasts.TransitionRoot" appear :show="toasts.hasBackdrop">
            <!-- The backdrop, rendered as a fixed sibling to the panel container -->
            <component
                :is="toasts.TransitionChild"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div class="fixed inset-0 bg-black/75 transition-opacity" />
            </component>
        </component>

        <div class="fixed inset-0 grid grid-cols-3 grid-flow-row-3 z-10 pointer-events-none">
            <div v-for="position in toasts.positions" class="relative">
                <div
                    :class="{
                        'absolute w-full h-full flex flex-col p-4 space-y-4': true,
                        'items-start justify-start': position == 'left-top',
                        'items-center justify-start': position == 'center-top',
                        'items-end justify-start': position == 'right-top',
                        'items-start justify-center': position == 'left-center',
                        'items-center justify-center': position == 'center-center',
                        'items-end justify-center': position == 'right-center',
                        'items-start justify-end': position == 'left-bottom',
                        'items-center justify-end': position == 'center-bottom',
                        'items-end justify-end': position == 'right-bottom'
                    }"
                >
                    <template v-for="(toast, toastKey) in toasts.toasts">
                        <template v-if="toast.position == position && !toast.dismissed && toast.html">
                            <component :is="toasts.Render"
                                @dismiss="toasts.dismissToast(toastKey)"
                                :toast-key="toastKey"
                                :key="toastKey"
                                :html="toast.html"
                            />
                        </template>
                    </template>
                </div>
            </div>
        </div>
    </template>
</SpladeToasts>
