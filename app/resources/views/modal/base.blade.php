@extends('layout')

@section('content')

ModalComponent

<Link modal dusk="one" href="{{ route('modal.one') }}">Open Modal One</Link>
<Link slideover dusk="slideover" href="{{ route('modal.slideover') }}">Open Modal Slideover</Link>

@endsection