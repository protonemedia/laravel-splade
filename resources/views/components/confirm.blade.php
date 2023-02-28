<SpladeConfirm
    default-title="{{ __('Are you sure you want to continue?') }}"
    default-text=""
    default-password-text="{{ __('Please confirm your password before continuing') }}"
    default-confirm-button="{{ __('Confirm') }}"
    default-cancel-button="{{ __('Cancel') }}"
    confirm-password-route="{{ $confirmPasswordRoute ?? "" }}"
    confirmed-password-status-route="{{ $confirmedPasswordStatusRoute ?? "" }}"
>
    <template #default="confirm">
        <x-splade-component is="transition" show="confirm.isOpen">
            <x-splade-component is="dialog" class="relative z-30" close="confirm.setIsOpen(false)">
                <x-splade-component
                    is="transition"
                    child
                    animation="opacity"
                    class="fixed z-30 inset-0 bg-black/75"
                />

                <div class="fixed z-40 inset-0 overflow-y-auto">
                    <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                        <x-splade-component is="transition" child animation="fade" after-leave="confirm.emitClose">
                            <x-splade-component is="dialog" panel class="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
                                <div class="sm:flex sm:items-start">
                                    <div class="text-center sm:mt-0 sm:text-left">
                                        <h3 class="text-lg leading-6 font-medium text-gray-900" v-text="confirm.title" />
                                        <div class="mt-2" v-if="confirm.text">
                                            <p class="text-sm text-gray-500" v-text="confirm.text" />
                                        </div>

                                        <div class="mt-2 flex rounded-md border border-gray-300 shadow-sm" v-if="confirm.confirmPassword">
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                v-on:change="confirm.setPassword($event.target.value)"
                                                class="rounded-md block w-full border-0 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed"
                                                @keyup.enter="confirm.confirm"
                                                :disabled="confirm.submitting"
                                            />
                                        </div>

                                        <p v-if="confirm.passwordError" v-text="confirm.passwordError" class="text-red-600 text-sm mt-2 font-sans" />
                                    </div>
                                </div>

                                <div class="mt-5 sm:mt-4 sm:flex">
                                    <button
                                        dusk="splade-confirm-confirm"
                                        type="button"
                                        class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto sm:text-sm"
                                        :class="{
                                            'bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-500': !confirm.confirmDanger,
                                            'bg-red-500 hover:bg-red-700 focus:ring-red-500': confirm.confirmDanger
                                        }"
                                        @click.prevent="confirm.confirm"
                                        :disabled="confirm.submitting"
                                        v-text="confirm.confirmButton"
                                    />
                                    <button
                                        dusk="splade-confirm-cancel"
                                        type="button"
                                        class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                        @click.prevent="confirm.cancel"
                                        :disabled="confirm.submitting"
                                        v-text="confirm.cancelButton"
                                    />
                                </div>
                            </x-splade-component>
                        </x-splade-component>
                    </div>
                </div>
            </x-splade-component>
        </x-splade-component>
    </template>
</SpladeConfirm>