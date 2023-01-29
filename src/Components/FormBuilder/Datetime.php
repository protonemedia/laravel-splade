<?php

namespace ProtoneMedia\Splade\Components\FormBuilder;

class Datetime extends Date
{
    public function __construct($name)
    {
        parent::__construct($name);

        $this->time();
    }
}
