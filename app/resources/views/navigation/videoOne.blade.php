<x-video-layout>
    <x-slot:title> Title for Chapter 1 </x-slot>

    <x-slot:subtitle> Subtitle for Chapter 1 </x-slot>

    <x-header title="Title eno" help="Helptext">
        <x-slot:subtitle> Subtitle eno </x-slot:subtitle>

        HeaderSlot
    </x-header>

    <article class="prose mt-8">
        <h2>Chapter one</h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum non quod, sint optio nam possimus at. Illum, dolores similique, unde sed reiciendis quibusdam quas iste cumque, facere eaque porro.</p>

        <Link dusk="two" href="/navigation/video/two">Go to Chapter two</Link>

        <form>
            <input name="persistent_video_one" />
        </form>

        <Link dusk="nav" href="/navigation/one">Back to nav</Link>
    </article>
</x-video-layout>