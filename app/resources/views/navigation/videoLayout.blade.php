<div class="container mt-4 mx-auto">
    {{ $slot }}

    <div class="fixed bottom-0 left-0 flex justify-between items-center bg-indigo-50 w-full">
        <h2 class="text-xl ml-8">Persistent Video</h2>
        <video class="w-full max-w-[16rem] aspect-video" controls loop muted>
            <source src="/video_no_audio.mp4" type="video/mp4">
        </video>
    </div>
</div>