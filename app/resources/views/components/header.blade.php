<div>
    <h4>{{ $title }}</h4>
    <h5>{{ $subtitle }}</h5>
    <h6>{{ $attributes->get('help') }}</h6>

    <div dusk="header-slot">{{ $slot }}</div>
</div>