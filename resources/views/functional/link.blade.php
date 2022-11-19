<Link {{ $attributes }}
    @if($data) :data="@js($data)" @else :data="{!! $jsonData !!}" @endif
    @if($headers) :headers="@js($headers)" @else :headers="{!! $jsonHeaders !!}" @endif
>
    {{ $slot }}
</Link>