<?php

namespace ProtoneMedia\Splade\Http;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
use ProtoneMedia\Splade\PasswordValidator;

class ConfirmPasswordController
{
    /**
     * Indicates whether the user has recently confirmed their password.
     */
    public function show(Request $request, PasswordValidator $passwordValidator): Response
    {
        if ($passwordValidator->recentlyConfirmed($request)) {
            return response()->noContent(200)->skipSpladeMiddleware();
        }

        throw ValidationException::withMessages([
            'password' => __('The password confirmation has expired.'),
        ]);
    }

    /**
     * Confirm the given user's password.
     */
    public function store(Request $request, PasswordValidator $passwordValidator): Response
    {
        $passwordValidator->validateRequest($request, 'password');

        $request->session()->put('auth.password_confirmed_at', time());

        return response()->noContent(200)->skipSpladeMiddleware();
    }
}
