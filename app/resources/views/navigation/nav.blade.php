<div class="flex space-x-3">
    <Link dusk="one" href="/navigation/one">One</Link>
    <Link dusk="two" href="/navigation/two">Two</Link>
    <Link dusk="three" href="/navigation/three">Three</Link>
    <Link dusk="notFound" href="/navigation/notFound">notFound</Link>
    <Link dusk="serverError" href="/navigation/serverError">serverError</Link>

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
</div>