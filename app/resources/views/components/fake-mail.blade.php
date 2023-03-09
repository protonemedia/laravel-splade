{{ $title ?? 'Default Title' }}

<div>
    <p>User email: <span dusk="email" v-text="props.user.email" /></p>

    <input name="prefix" v-model="props.prefix" placeholder="Prefix..." />

    <button @click="randomize">Randomize</button>
</div>

