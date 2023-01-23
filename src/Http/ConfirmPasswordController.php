<?php

namespace ProtoneMedia\Splade\Http;

use Illuminate\Contracts\Auth\StatefulGuard;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Laravel\Fortify\Actions\ConfirmPassword;

class ConfirmPasswordController
{
    /**
     * Confirm the given user's password using Laravel Fortify.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return bool
     */
    private function confirmWithFortify(Request $request): bool
    {
        return app(ConfirmPassword::class)(
            app(StatefulGuard::class), $request->user(), $request->input('password')
        );
    }

    /**
     * Confirm the given user's password using regular Laravel Auth logic.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return bool
     */
    private function confirmWithoutForfify(Request $request): bool
    {
        $guard = Auth::guard(config('splade.confirm_password_guard'));

        $user = $guard->user();

        return $guard->validate([
            $user->getAuthIdentifierName() => $user->getAuthIdentifier(),
            'password'                     => $request->input('password'),
        ]);
    }

    /**
     * Confirm the given user's password.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request): Response
    {
        $user = $request->user();

        if (!$user) {
            throw ValidationException::withMessages([
                'password' => __('No user is logged in'),
            ]);
        }

        $confirmed = class_exists(ConfirmPassword::class)
            ? $this->confirmWithFortify($request)
            : $this->confirmWithoutForfify($request);

        if (!$confirmed) {
            throw ValidationException::withMessages([
                'password' => __('auth.password'),
            ]);
        }

        $request->session()->put('auth.password_confirmed_at', time());

        return response()->noContent(200)->skipSpladeMiddleware();
    }
}
