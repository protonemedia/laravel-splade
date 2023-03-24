<?php

namespace ProtoneMedia\Splade;

use Closure;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use ProtoneMedia\Splade\Facades\Splade;
use ProtoneMedia\Splade\Http\ResolvableData;
use Symfony\Component\HttpFoundation\Response;
use Throwable;
use Traversable;

class SpladeCore
{
    const HEADER_SPLADE = 'X-Splade';

    const HEADER_MODAL = 'X-Splade-Modal';

    const HEADER_MODAL_TARGET = 'X-Splade-Modal-Target';

    const HEADER_PREVENT_REFRESH = 'X-Splade-Prevent-Refresh';

    const HEADER_PRESERVE_SCROLL = 'X-Splade-Preserve-Scroll';

    const HEADER_LAZY = 'X-Splade-Lazy';

    const HEADER_REHYDRATE = 'X-Splade-Rehydrate';

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

    private int $rehydrateComponents = 0;

    private Head $head;

    private $customToastFactory;

    private array $dataStores = [];

    private array $transformMap = [];

    private bool $defaultModalCloseExplicitly = false;

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
     */
    public function getRootView(): string
    {
        return $this->rootView;
    }

    /**
     * Setter for the root view.
     *
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
        $this->modalKey = Str::uuid();
        $this->shared   = [];
        $this->toasts   = [];

        return $this->resetLazyComponentCounter()
            ->resetDataStores()
            ->resetPersistentLayoutKey()
            ->resetRehydrateComponentCounter();
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
     */
    private function request(): Request
    {
        return call_user_func($this->requestResolver);
    }

    /**
     * Returns the Modal Key.
     */
    public function getModalKey(): string
    {
        return $this->modalKey;
    }

    /**
     * Setter for the Modal Key.
     *
     * @return $this
     */
    public function setModalKey(string $key): self
    {
        $this->modalKey = $key;

        return $this;
    }

    /**
     * Returns the Persistent Layout Key.
     */
    public function getPersistentLayoutKey(): ?string
    {
        return $this->persistentLayoutKey;
    }

    /**
     * Setter for the Persistent Layout Key.
     *
     * @return $this
     */
    public function setPersistentLayoutKey(string $key): self
    {
        $this->persistentLayoutKey = $key;

        return $this;
    }

    /**
     * Increases the amount of Lazy Components and returns the latest key.
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
     * Increases the amount of Rehydrate Components and returns the latest key.
     */
    public function newRehydrateComponentKey(): string
    {
        return (string) $this->rehydrateComponents++;
    }

    /**
     * Resets the Rehydrate Components counter.
     *
     * @return $this
     */
    public function resetRehydrateComponentCounter(): self
    {
        $this->rehydrateComponents = 0;

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
     * @return $this
     */
    public function defaultToast(callable $toastFactory): self
    {
        $this->customToastFactory = $toastFactory;

        return $this;
    }

    /**
     * Returns the custom toast factory.
     */
    public function getCustomToastFactory(): ?callable
    {
        return $this->customToastFactory;
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
     * @return \ProtoneMedia\Splade\SpladeToast
     */
    public static function toastOnEvent(string $message = ''): SpladeToast
    {
        $newToast = new SpladeToast($message);

        if ($factory = Splade::getCustomToastFactory()) {
            call_user_func($factory, $newToast);
        }

        if (trim($message) !== '') {
            $newToast->message($message);
        }

        return $newToast;
    }

    /**
     * Returns a Closure that prevents generating a response from
     * a ValidationException when this is a Splade request.
     *
     * @param  callable  $renderUsing
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

            if ($request->header(SpladeCore::HEADER_SPLADE)) {
                /** @var Handler $this */
                if ($e instanceof ValidationException) {
                    // Always return a JSON response for validation exceptions.
                    return $this->invalidJson($request, $e);
                }

                if ($e instanceof AuthenticationException) {
                    // Still use request()->guest() so the "indented" URL is preserved.
                    return Splade::redirectAway(
                        redirect()->guest($e->redirectTo() ?? route('login'))->getTargetUrl()
                    );
                }

                return $this->prepareResponse($request, $e);
            }
        }, $exceptionHandler, get_class($exceptionHandler));
    }

    /**
     * Returns a new SpladeToast instance, optionally with the given message
     * if it isn't empty, and it uses the custom toast factory if set.
     *
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
     */
    public function getShared(): array
    {
        return $this->shared;
    }

    /**
     * Returns all registered Data Stores.
     */
    public function getDataStores(): array
    {
        return $this->dataStores;
    }

    /**
     * Adds a new Data Store.
     *
     * @param  \ProtoneMedia\Splade\DataStore  $store
     */
    public function addDataStore(DataStore $store): self
    {
        $this->dataStores[$store->name] = $store;

        return $this;
    }

    /**
     * Resets the Data Stores.
     *
     * @return $this
     */
    public function resetDataStores(): self
    {
        $this->dataStores = [];

        return $this;
    }

    /**
     * Sets data on the shared data array.
     *
     * @param  mixed  $value
     * @return $this
     */
    public function share(string $key, $value): self
    {
        Arr::set($this->shared, $key, $value);

        return $this;
    }

    /**
     * Getter for the toasts.
     */
    public function getToasts(): array
    {
        return $this->toasts;
    }

    /**
     * Returns a boolean whether this is a Splade request.
     */
    public function isSpladeRequest(): bool
    {
        return $this->request()->hasHeader(static::HEADER_SPLADE);
    }

    /**
     * Returns a boolean whether this is a Modal request.
     */
    public function isModalRequest(): bool
    {
        return $this->request()->hasHeader(static::HEADER_MODAL);
    }

    /**
     * Returns a boolean whether the response should prevent a
     * page request on the front end.
     */
    public function dontRefreshPage(): bool
    {
        return $this->request()->hasHeader(static::HEADER_PREVENT_REFRESH);
    }

    /**
     * Returns a boolean whether the next page should preserve the scroll position.
     */
    public function preserveScroll(): bool
    {
        return $this->request()->hasHeader(static::HEADER_PRESERVE_SCROLL);
    }

    /**
     * Returns a boolean whether this is a Lazy request.
     */
    public function isLazyRequest(): bool
    {
        return $this->request()->hasHeader(static::HEADER_LAZY);
    }

    /**
     * Returns a boolean whether this is a Rehydrate request.
     */
    public function isRehydrateRequest(): bool
    {
        return $this->request()->hasHeader(static::HEADER_REHYDRATE);
    }

    /**
     * Retrieves the Lazy Component key from the request header.
     */
    public function getLazyComponentKey(): int
    {
        return $this->request()->header(static::HEADER_LAZY);
    }

    /**
     * Retrieves the Rehydrate Component key from the request header.
     */
    public function getRehydrateComponentKey(): int
    {
        return (int) $this->request()->header(static::HEADER_REHYDRATE);
    }

    /**
     * Returns the Modal type from the request header.
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

    /**
     * Indicates whether every resource needs a valid transformer.
     */
    public function requireTransformer($value = true): self
    {
        app(Transformer::class)->requireTransformer($value);

        return $this;
    }

    /**
     * Adds a transformer for the given class.
     */
    public function transformUsing($class, $transformer = null): self
    {
        if (is_array($class)) {
            foreach ($class as $key => $value) {
                $this->transformUsing($key, $value);
            }

            return $this;
        }

        $this->transformMap[$class] = $transformer;

        return $this;
    }

    /**
     * Finds the transformer for the given class.
     */
    public function findTransformerFor(array|object $instance)
    {
        if (is_object($instance)) {
            $class = get_class($instance);

            if (array_key_exists($class, $this->transformMap)) {
                return $this->transformMap[$class];
            }
        }

        if (is_array($instance) || $instance instanceof Traversable) {
            $firstElement = Arr::first($instance);

            return is_object($firstElement) ? $this->findTransformerFor($firstElement) : null;
        }

        return null;
    }

    /**
     * Setter for the 'defaultModalCloseExplicitly' property.
     */
    public function defaultModalCloseExplicitly(bool $value = true): self
    {
        $this->defaultModalCloseExplicitly = $value;

        return $this;
    }

    /**
     * Getter for the 'defaultModalCloseExplicitly' property.
     */
    public function getDefaultModalCloseExplicitly(): bool
    {
        return $this->defaultModalCloseExplicitly;
    }
}
