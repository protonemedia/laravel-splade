<SpladeToast v-bind:auto-dismiss="@json($autoDismiss)" #default="toast">
    <x-splade-component is="transition" appear show="toast.show">
        <x-splade-component is="transition" child after-leave="toast.emitDismiss">
            <div @class([
                'p-4 pointer-events-auto border-l-4 shadow-md min-w-[240px]',
                'bg-green-50 border-green-400' => $isSuccess,
                'bg-yellow-50 border-yellow-400' => $isWarning,
                'bg-red-50 border-red-400' => $isDanger,
                'bg-blue-50 border-blue-400' => $isInfo,
            ])>
                <div class="flex">
                    <div class="flex-shrink-0">
                        @if($isSuccess)
                            <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                        @elseif($isWarning)
                            <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                            </svg>
                        @elseif($isDanger)
                            <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                            </svg>
                        @elseif($isInfo)
                            <svg class="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                            </svg>
                        @endif
                    </div>
                    <div class="ml-3 break-words">
                        <h3 @class([
                            'text-sm font-medium',
                            'text-green-800' => $isSuccess,
                            'text-orange-800' => $isWarning,
                            'text-red-800' => $isDanger,
                            'text-blue-800' => $isInfo,
                        ])>
                           {!! nl2br(e($title ?: $message)) !!}
                        </h3>

                        @if($title && $message)
                            <div @class([
                                'mt-2 text-sm',
                                'text-green-700' => $isSuccess,
                                'text-orange-700' => $isWarning,
                                'text-red-700' => $isDanger,
                                'text-blue-700' => $isInfo,
                            ])>
                                <p>{!! nl2br(e($message)) !!}</p>
                            </div>
                        @endif
                    </div>

                    <div class="ml-auto pl-3">
                        <div class="-mx-1.5 -my-1.5">
                            <button type="button" @click.prevent="toast.setShow(false)" @class([
                                'inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2',
                                'bg-green-50 text-green-500 hover:bg-green-100 focus:ring-offset-green-50 focus:ring-green-600' => $isSuccess,
                                'bg-orange-50 text-orange-500 hover:bg-orange-100 focus:ring-offset-orange-50 focus:ring-orange-600' => $isWarning,
                                'bg-red-50 text-red-500 hover:bg-red-100 focus:ring-offset-red-50 focus:ring-red-600' => $isDanger,
                                'bg-blue-50 text-blue-500 hover:bg-blue-100 focus:ring-offset-blue-50 focus:ring-blue-600' => $isInfo,
                            ])>
                                <span class="sr-only">Dismiss Toast</span>
                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </x-splade-component>
    </x-splade-component>
</SpladeToast>