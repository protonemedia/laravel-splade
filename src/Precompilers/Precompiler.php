<?php

namespace ProtoneMedia\Splade\Precompilers;

interface Precompiler
{
    public function __invoke(string $view): string;
}
