<?php

namespace ProtoneMedia\Splade;

class DataStore
{
    public function __construct(
        public string $name,
        public bool|string $remember,
        public bool $localStorage,
        public ?string $json = null,
        public $data = null,
    ) {
    }
}
