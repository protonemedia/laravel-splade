<?php

namespace ProtoneMedia\Splade;

use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Redirector;

/**
 * @method static \ProtoneMedia\Splade\EventRedirect action(string|array $action, mixed $parameters = [], int $status = 302, array $headers = [])
 * @method static \ProtoneMedia\Splade\EventRedirect away(string $path, int $status = 302, array $headers = [])
 * @method static \ProtoneMedia\Splade\EventRedirect back(int $status = 302, array $headers = [], $fallback = false)
 * @method static \ProtoneMedia\Splade\EventRedirect guest(string $path, int $status = 302, array $headers = [], bool $secure = null)
 * @method static \ProtoneMedia\Splade\EventRedirect home(int $status = 302)
 * @method static \ProtoneMedia\Splade\EventRedirect intended(string $default = '/', int $status = 302, array $headers = [], bool $secure = null)
 * @method static \ProtoneMedia\Splade\EventRedirect refresh(int $status = 302, array $headers = [])
 * @method static \ProtoneMedia\Splade\EventRedirect route(string $route, mixed $parameters = [], int $status = 302, array $headers = [])
 * @method static \ProtoneMedia\Splade\EventRedirect secure(string $path, int $status = 302, array $headers = [])
 * @method static \ProtoneMedia\Splade\EventRedirect signedRoute(string $name, mixed $parameters = [], \DateTimeInterface|\DateInterval|int $expiration = null, int $status = 302, array $headers = [])
 * @method static \ProtoneMedia\Splade\EventRedirect temporarySignedRoute(string $name, \DateTimeInterface|\DateInterval|int $expiration, mixed $parameters = [], int $status = 302, array $headers = [])
 * @method static \ProtoneMedia\Splade\EventRedirect to(string $path, int $status = 302, array $headers = [], bool $secure = null)
 */
class EventRedirectFactory
{
    /**
     * Creates an instance.
     */
    public function __construct(
        private Redirector $redirector
    ) {
    }

    /**
     * Forwards all calls to the Redirector, which will genereate
     * a RedirectResponse. Then we grab the Target URL from the
     * it and return a EventRedirect instance with the URL.
     *
     * @param  string  $method
     * @param  array  $parameters
     * @return \ProtoneMedia\Splade\EventRedirect
     */
    public function __call($method, $parameters): EventRedirect
    {
        /** @var RedirectResponse $response */
        $response = $this->redirector->$method(...$parameters);

        return new EventRedirect(
            $response->getTargetUrl()
        );
    }
}
