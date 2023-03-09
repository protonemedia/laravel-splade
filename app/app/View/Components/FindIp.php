<?php

namespace App\View\Components;

use Illuminate\View\Component;
use ProtoneMedia\Splade\Components\WithVue;

class FindIp extends Component
{
    use WithVue;

    public function __construct(
        public $hostname = '',
        public $ip = '',
        public $dataTest = 'InlineDataTest'
    ) {
    }

    public function find()
    {
        $this->ip = gethostbyname($this->hostname);
    }

    public function render()
    {
        return <<<'blade'
            <p>{{ $dataTest }}</p>
            <input name="hostname" v-model="props.hostname" />
            <button @click="find">Find IP</button>
            <p dusk="ip">@{{ props.ip }}</p>
        blade;
    }
}
