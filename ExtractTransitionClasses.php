<?php

use ProtoneMedia\Splade\ServiceProvider;
use ProtoneMedia\Splade\TransitionRepository;

require __DIR__ . '/vendor/autoload.php';

$transitionRepository = new TransitionRepository;

ServiceProvider::registerTransitionAnimations($transitionRepository);

$classes = implode(' ', $transitionRepository->classes());

file_put_contents(
    __DIR__ . '/resources/views/transitions/classes.blade.php',
    "<div class='{$classes}'>\n<!-- This is an automatically generated template so that Tailwind won't purge these transition classes... -->\n</div>",
);
