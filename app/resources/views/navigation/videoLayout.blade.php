<div class="container mt-4 mx-auto">
    <h1 class="text-3xl mb-8">{{ $title }}</h1>

    {{ $subtitle }}

    {{ $slot }}

    <div class="fixed bottom-0 left-0 flex justify-between items-center bg-indigo-50 w-full">
        <h3 class="text-xl ml-8">Persistent Video</h3>
        <video class="w-full max-w-[16rem] aspect-video" controls loop muted>
            <source src="/video_no_audio.mp4" type="video/mp4">
        </video>
    </div>
</div>