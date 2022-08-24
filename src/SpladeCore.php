<?php

namespace ProtoneMedia\Splade;

use Closure;
use Illuminate\Foundation\Exceptions\Handler;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Validation\ValidationException;
use Throwable;

class SpladeCore
{
    const HEADER_SPLADE = 'X-Splade';

    const HEADER_MODAL = 'X-Splade-Modal';

    const HEADER_PREVENT_REFRESH = 'X-Splade-Prevent-Refresh';

    const MODAL_TYPE_MODAL = 'modal';

    const MODAL_TYPE_SLIDEOVER = 'slideover';

    private string $modalKey;

    private array $shared = [];

    private array $toasts = [];

    private string $rootView = 'root';

    private Head $head;

    public function getRootView(): string
    {
        return $this->rootView;
    }

    public function setRootView(string $view): self
    {
        $this->rootView = $view;

        return $this;
    }

    public function reset(): self
    {
        $this->modalKey = null;
        $this->shared   = [];
        $this->toasts   = [];

        return $this;
    }

    public function __construct(private $requestResolver)
    {
        $this->head = new Head;
    }

    private function request(): Request
    {
        return call_user_func($this->requestResolver);
    }

    public function getModalKey(): string
    {
        return $this->modalKey;
    }

    public function setModalKey(string $key): self
    {
        $this->modalKey = $key;

        return $this;
    }

    public static function refreshOnEvent(): EventRefresh
    {
        return new EventRefresh;
    }

    public static function redirectOnEvent(): EventRedirectFactory
    {
        return app(EventRedirectFactory::class);
    }

    public static function exceptionHandler(Handler $exceptionHandler): Closure
    {
        return Closure::bind(function (Throwable $e, $request) {
            if ($request->header(SpladeCore::HEADER_SPLADE) && !$e instanceof ValidationException) {
                /** @var Handler $this */
                return $this->prepareResponse($request, $e);
            }
        }, $exceptionHandler, get_class($exceptionHandler));
    }

    public function toastBuilder(): SpladeToastBuilder
    {
        return new SpladeToastBuilder($this);
    }

    public function head(): Head
    {
        return $this->head;
    }

    public function toast(string $message = ''): SpladeToast
    {
        return $this->toasts[] = new SpladeToast($message);
    }

    public static function toastOnEvent(string $message = ''): SpladeToast
    {
        return new SpladeToast($message);
    }

    public function getShared(): array
    {
        return $this->shared;
    }

    public function getToasts(): array
    {
        return $this->toasts;
    }

    public function share($key, $value): self
    {
        Arr::set($this->shared, $key, value($value));

        return $this;
    }

    public function isSpladeRequest(): bool
    {
        return $this->request()->hasHeader(static::HEADER_SPLADE);
    }

    public function isModalRequest(): bool
    {
        return $this->request()->hasHeader(static::HEADER_MODAL);
    }

    public function dontRefreshPage(): bool
    {
        return $this->request()->hasHeader(static::HEADER_PREVENT_REFRESH);
    }

    public function modalType(): string
    {
        return match ($this->request()->header(static::HEADER_MODAL)) {
            'slideover' => static::MODAL_TYPE_SLIDEOVER,
            default     => static::MODAL_TYPE_MODAL
        };
    }
}
