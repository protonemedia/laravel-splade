<?php

namespace ProtoneMedia\Splade;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Auth\StatefulGuard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Laravel\Fortify\Actions\ConfirmPassword;

class PasswordValidator
{
    /**
     * Returns a boolean whether Laravel Fortify is installed or not.
     */
    public function usesFortify(): bool
    {
        return class_exists(ConfirmPassword::class);
    }

    /**
     * Resolves the user from the request.
     *
     * @return mixed
     */
    private function user(Request $request)
    {
        return $this->usesFortify()
               ? $request->user()
               : Auth::guard(config('splade.confirm_password_guard'))->user();
    }

    /**
     * Returns whether the user has recently confirmed their password.
     */
    public function recentlyConfirmed(Request $request): bool
    {
        if (!$this->user($request)) {
            return false;
        }

        $secondsAgo = time() - $request->session()->get('auth.password_confirmed_at', 0);

        $timeout = config('auth.password_timeout', 900);

        return $secondsAgo < $timeout;
    }

    /**
     * Validate the given user's password using Laravel Fortify.
     *
     * @param  \Illuminate\Contracts\Auth\Authenticatable  $user
     */
    private function validateWithFortify(Authenticatable $user = null, string $password): bool
    {
        return app(ConfirmPassword::class)(
            app(StatefulGuard::class), $user, $password
        );
    }

    /**
     * Validate the given user's password using regular Laravel Auth logic.
     *
     * @param  \Illuminate\Contracts\Auth\Authenticatable  $user
     */
    private function validateWithoutForfify(Authenticatable $user = null, string $password): bool
    {
        $guard = Auth::guard(config('splade.confirm_password_guard'));

        return $guard->validate([
            $user->getAuthIdentifierName() => $user->getAuthIdentifier(),
            'password'                     => $password,
        ]);
    }

    /**
     * Validates the given Request.
     */
    public function validateRequest(Request $request, string $attribute): bool
    {
        return $this->validate($this->user($request), $request->input($attribute) ?: '', $attribute);
    }

    /**
     * Validates the given User and password.
     */
    public function validate(Authenticatable $user = null, string $password, string $attribute): bool
    {
        if (!$user) {
            throw ValidationException::withMessages([
                $attribute => __('No user is logged in'),
            ]);
        }

        $confirmed = $this->usesFortify()
            ? $this->validateWithFortify($user, $password)
            : $this->validateWithoutForfify($user, $password);

        if ($confirmed) {
            return true;
        }

        throw ValidationException::withMessages([
            $attribute => __('auth.password'),
        ]);
    }
}
