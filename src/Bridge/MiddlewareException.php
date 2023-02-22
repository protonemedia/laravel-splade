<?php

namespace ProtoneMedia\Splade\Bridge;

use Exception;
use Symfony\Component\HttpFoundation\Response;

class MiddlewareException extends Exception
{
    public $response;

    public function report(): bool
    {
        return true;
    }

    public function render(): Response
    {
        return $this->response;
    }

    public static function fromResponse($response)
    {
        return tap(new static, fn (self $e) => $e->response = $response);
    }
}
