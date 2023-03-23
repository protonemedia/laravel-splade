<?php

namespace ProtoneMedia\Splade\Http;

use Illuminate\Contracts\Support\Arrayable;

class SpladeResponseData implements Arrayable
{
    public function __construct(
        public array $head,
        public ?string $modal,
        public ?int $modalTarget,
        public object $flash,
        public object $errors,
        public object $shared,
        public array $toasts,
        public bool $preventRefresh,
        public bool $preserveScroll,
        public bool $lazy,
        public bool $rehydrate,
        public ?string $persistentLayout,
    ) {
    }

    public function toArray()
    {
        return [
            'head'             => $this->head,
            'modal'            => $this->modal,
            'modalTarget'      => $this->modalTarget,
            'flash'            => $this->flash,
            'errors'           => $this->errors,
            'shared'           => $this->shared,
            'toasts'           => $this->toasts,
            'preventRefresh'   => $this->preventRefresh,
            'preserveScroll'   => $this->preserveScroll,
            'lazy'             => $this->lazy,
            'rehydrate'        => $this->rehydrate,
            'persistentLayout' => $this->persistentLayout,
        ];
    }
}
