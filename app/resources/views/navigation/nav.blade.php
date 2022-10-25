<x-splade-toggle>
    <div class="flex space-x-3">
        <Link dusk="one" href="/navigation/one">One</Link>
        <Link dusk="two" href="/navigation/two">Two</Link>
        <Link dusk="three" href="/navigation/three">Three</Link>
        <Link dusk="notFound" href="/navigation/notFound">notFound</Link>
        <Link dusk="serverError" href="/navigation/serverError">serverError</Link>
        <Link dusk="video" href="/navigation/video/one">Video</Link>
        <Link dusk="redirectToTwo" href="/navigation/redirectToTwo">redirectToTwo</Link>
        <Link dusk="away" href="/navigation/away">Away</Link>
        <Link dusk="awayViaFacade" href="/navigation/awayViaFacade">AwayViaFacade</Link>
        <Link away dusk="awayViaLink" href="https://splade.dev">AwayViaLink</Link>
        <Link dusk="lazy" href="/lazy">Lazy</Link>

        <Link confirm dusk="confirm" href="/navigation/two">Confirm to two</Link>
        <Link
            confirm="Custom title"
            confirm-text="Custom text"
            confirm-button="Yes"
            cancel-button="No"
            dusk="confirm-custom"
            href="/navigation/two">
            Custom Confirm to two
        </Link>

        <Link dusk="form" href="/navigation/form">Form</Link>

        <button dusk="open-dialog" @click="toggle">Open Menu in Dialog</button>
    </div>

    <div v-show="toggled" class="absolute inset-0 bg-black/75 z-10"></div>

    <x-splade-dialog open="toggled">
        <div v-show="toggled" class="fixed inset-0 z-20 overflow-y-auto">
            <div class="min-h-full relative w-full max-w-xs bg-blue-100 px-4 pt-5 pb-12">
                <div class="flex space-x-3">
                    <Link dusk="dialog-one" href="/navigation/one">One</Link>
                    <Link dusk="dialog-two" href="/navigation/two">Two</Link>
                    <Link dusk="dialog-three" href="/navigation/three">Three</Link>
                </div>

                <p>{{ request()->url() }}</p>
            </div>
        </div>
    </x-splade-dialog>
</x-splade-toggle>
