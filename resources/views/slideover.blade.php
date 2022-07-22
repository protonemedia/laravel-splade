<x-dynamic-component :component="$wrapperName" :base-attributes="$attributes" :key="$modalKey">
    <!-- Full-screen scrollable container -->
    <div class="fixed inset-0 overflow-y-auto">
        <!-- Container to center the panel -->
        <div class="flex min-h-full items-center justify-end">
            <!-- The actual dialog panel -->
            <component :is="modal.TransitionChild"
                as="template"
                enter="transform transition ease-in-out duration-300"
                enter-from="translate-x-full"
                enter-to="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leave-from="translate-x-0"
                leave-to="translate-x-full"
                @after-leave="modal.emitClose"
            >
                <component :is="modal.DialogPanel"
                    class="transition w-full"
                    :class="{
                        'blur-sm': !modal.onTopOfStack,
                        'sm:max-w-sm': modal.maxWidth == 'sm',
                        'sm:max-w-md': modal.maxWidth == 'md',
                        'sm:max-w-md md:max-w-lg': modal.maxWidth == 'lg',
                        'sm:max-w-md md:max-w-xl': modal.maxWidth == 'xl',
                        'sm:max-w-md md:max-w-xl lg:max-w-2xl': modal.maxWidth == '2xl',
                        'sm:max-w-md md:max-w-xl lg:max-w-3xl': modal.maxWidth == '3xl',
                        'sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-4xl': modal.maxWidth == '4xl',
                        'sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-5xl': modal.maxWidth == '5xl',
                        'sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl': modal.maxWidth == '6xl',
                        'sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl': modal.maxWidth == '7xl'
                    }"
                >
                    <div class="bg-white p-6 min-h-screen">
                        {{ $slot }}
                    </div>
                </component>
            </component>
        </div>
    </div>
</x-dynamic-component>
