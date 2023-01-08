<?php

namespace ProtoneMedia\Splade;

use Closure;
use Illuminate\Foundation\Exceptions\Handler;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Validation\ValidationException;
use ProtoneMedia\Splade\Http\ResolvableData;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class SpladeCore
{
    const HEADER_SPLADE = 'X-Splade';

    const HEADER_MODAL = 'X-Splade-Modal';

    const HEADER_MODAL_TARGET = 'X-Splade-Modal-Target';

    const HEADER_PREVENT_REFRESH = 'X-Splade-Prevent-Refresh';

    const HEADER_LAZY = 'X-Splade-Lazy';

    const HEADER_REDIRECT_AWAY = 'X-Splade-Redirect-Away';

    const HEADER_SKIP_MIDDLEWARE = 'X-Splade-Skip-Middleware';

    const MODAL_TYPE_MODAL = 'modal';

    const MODAL_TYPE_SLIDEOVER = 'slideover';

    private string $modalKey;

    private ?string $persistentLayoutKey;

    private array $shared = [];

    private array $toasts = [];

    private string $rootView = 'root';

    private int $lazyComponents = 0;

    private Head $head;

    private $customToastFactory;

    /**
     * Creates an instance.
     *
     * @param  Closure  $requestResolver
     */
    public function __construct(private $requestResolver)
    {
        $this->head = new Head;
    }

    /**
     * Returns the root view that's used on the initial request to wrap the content.
     *
     * @return string
     */
    public function getRootView(): string
    {
        return $this->rootView;
    }

    /**
     * Setter for the root view.
     *
     * @param  string  $view
     * @return $this
     */
    public function setRootView(string $view): self
    {
        $this->rootView = $view;

        return $this;
    }

    /**
     * Resets the Modal Key, shared data and toasts.
     *
     * @return $this
     */
    public function reset(): self
    {
        $this->modalKey = null;
        $this->shared   = [];
        $this->toasts   = [];

        $this->persistentLayoutKey = null;

        return $this;
    }

    /**
     * Getter for the Head instance.
     *
     * @return \ProtoneMedia\Splade\Head
     */
    public function head(): Head
    {
        return $this->head;
    }

    /**
     * Resolves the Request instance from the callable.
     *
     * @return \Illuminate\Http\Request
     */
    private function request(): Request
    {
        return call_user_func($this->requestResolver);
    }

    /**
     * Returns the Modal Key.
     *
     * @return string
     */
    public function getModalKey(): string
    {
        return $this->modalKey;
    }

    /**
     * Setter for the Modal Key.
     *
     * @param  string  $key
     * @return $this
     */
    public function setModalKey(string $key): self
    {
        $this->modalKey = $key;

        return $this;
    }

    /**
     * Returns the Persistent Layout Key.
     *
     * @return null|string
     */
    public function getPersistentLayoutKey(): ?string
    {
        return $this->persistentLayoutKey;
    }

    /**
     * Setter for the Persistent Layout Key.
     *
     * @param  string  $key
     * @return $this
     */
    public function setPersistentLayoutKey(string $key): self
    {
        $this->persistentLayoutKey = $key;

        return $this;
    }

    /**
     * Increases the amount of Lazy Components and returns the latest key.
     *
     * @return string
     */
    public function newLazyComponentKey(): string
    {
        return $this->lazyComponents++;
    }

    /**
     * Resets the Lazy Components counter.
     *
     * @return $this
     */
    public function resetLazyComponentCounter(): self
    {
        $this->lazyComponents = 0;

        return $this;
    }

    /**
     * Resets the Persistent Layout key.
     *
     * @return $this
     */
    public function resetPersistentLayoutKey(): self
    {
        $this->persistentLayoutKey = null;

        return $this;
    }

    /**
     * Sets a callable that defines how a default Toast.
     *
     * @param  callable  $toastFactory
     * @return $this
     */
    public function defaultToast(callable $toastFactory): self
    {
        $this->customToastFactory = $toastFactory;

        return $this;
    }

    /**
     * Resolves the given value if this is the initial request.
     *
     * @param  mixed  $value
     * @return mixed
     */
    public function onInit($value)
    {
        return ResolvableData::from($value)->resolveIf(!$this->isLazyRequest());
    }

    /**
     * Resolves the given value if this a Splade request.
     *
     * @param  mixed  $value
     * @return mixed
     */
    public function onLazy($value)
    {
        return ResolvableData::from($value)->resolveIf($this->isLazyRequest());
    }

    /**
     * Returns a new EventRefresh instance.
     *
     * @return \ProtoneMedia\Splade\EventRefresh
     */
    public static function refreshOnEvent(): EventRefresh
    {
        return new EventRefresh;
    }

    /**
     * Returns a new EventRedirectFactory instance.
     *
     * @return \ProtoneMedia\Splade\EventRedirectFactory
     */
    public static function redirectOnEvent(): EventRedirectFactory
    {
        return app(EventRedirectFactory::class);
    }

    /**
     * Returns a new instance of the ToastBuilder.
     *
     * @return \ProtoneMedia\Splade\SpladeToastBuilder
     */
    public function toastBuilder(): SpladeToastBuilder
    {
        return new SpladeToastBuilder($this);
    }

    /**
     * Returns a new SpladeToast instance
     *
     * @param  string  $message
     * @return \ProtoneMedia\Splade\SpladeToast
     */
    public static function toastOnEvent(string $message = ''): SpladeToast
    {
        return new SpladeToast($message);
    }

    /**
     * Returns a Closure that prevents generating a response from
     * a ValidationException when this is a Splade request.
     *
     * @param  \Illuminate\Foundation\Exceptions\Handler  $exceptionHandler
     * @param  callable  $renderUsing
     * @return Closure
     */
    public static function exceptionHandler(Handler $exceptionHandler, callable $renderUsing = null): Closure
    {
        return Closure::bind(function (Throwable $e, $request) use ($renderUsing) {
            if ($renderUsing) {
                $response = $renderUsing($e, $request);

                if (!is_null($response)) {
                    return $response;
                }
            }

            if ($request->header(SpladeCore::HEADER_SPLADE) && !$e instanceof ValidationException) {
                /** @var Handler $this */
                return $this->prepareResponse($request, $e);
            }
        }, $exceptionHandler, get_class($exceptionHandler));
    }

    /**
     * Returns a new SpladeToast instance, optionally with the given message
     * if it isn't empty, and it uses the custom toast factory if set.
     *
     * @param  string  $message
     * @return \ProtoneMedia\Splade\SpladeToast
     */
    public function toast(string $message = ''): SpladeToast
    {
        $newToast = new SpladeToast($message);

        if ($this->customToastFactory) {
            call_user_func($this->customToastFactory, $newToast);
        }

        if (trim($message) !== '') {
            $newToast->message($message);
        }

        return $this->toasts[] = $newToast;
    }

    /**
     * Getter for the Shared Data.
     *
     * @return array
     */
    public function getShared(): array
    {
        return $this->shared;
    }

    /**
     * Sets data on the shared data array.
     *
     * @param  string  $key
     * @param  mixed  $value
     * @return $this
     */
    public function share(string $key, $value): self
    {
        Arr::set($this->shared, $key, value($value));

        return $this;
    }

    /**
     * Getter for the toasts.
     *
     * @return array
     */
    public function getToasts(): array
    {
        return $this->toasts;
    }

    /**
     * Returns a boolean whether this is a Splade request.
     *
     * @return bool
     */
    public function isSpladeRequest(): bool
    {
        return $this->request()->hasHeader(static::HEADER_SPLADE);
    }

    /**
     * Returns a boolean whether this is a Modal request.
     *
     * @return bool
     */
    public function isModalRequest(): bool
    {
        return $this->request()->hasHeader(static::HEADER_MODAL);
    }

    /**
     * Returns a boolean whether the response should prevent a
     * page request on the front end.
     *
     * @return bool
     */
    public function dontRefreshPage(): bool
    {
        return $this->request()->hasHeader(static::HEADER_PREVENT_REFRESH);
    }

    /**
     * Returns a boolean whether this is a Lazy request.
     *
     * @return bool
     */
    public function isLazyRequest(): bool
    {
        return $this->request()->hasHeader(static::HEADER_LAZY);
    }

    /**
     * Retrieves the Lazy Component key from the request header.
     *
     * @return int
     */
    public function getLazyComponentKey(): int
    {
        return $this->request()->header(static::HEADER_LAZY);
    }

    /**
     * Returns the Modal type from the request header.
     *
     * @return string
     */
    public function getModalType(): string
    {
        return match ($this->request()->header(static::HEADER_MODAL)) {
            'slideover' => static::MODAL_TYPE_SLIDEOVER,
            default     => static::MODAL_TYPE_MODAL
        };
    }

    /**
     * Returns the Modal target from the request header.
     *
     * @return string
     */
    public function getModalTarget(): ?int
    {
        return $this->isModalRequest()
            ? $this->request()->header(static::HEADER_MODAL_TARGET)
            : null;
    }

    /**
     * Returns a JSON response that indicates that the Splade frontend
     * should redirect to an external URL.
     *
     * @param  string  $targetUrl
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function redirectAway(string $targetUrl): Response
    {
        if (!$this->isSpladeRequest()) {
            return redirect()->away($targetUrl);
        }

        return new JsonResponse(null, 409, [
            static::HEADER_REDIRECT_AWAY => $targetUrl,
        ]);
    }
}
