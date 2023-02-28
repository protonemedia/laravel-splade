<?php

namespace ProtoneMedia\Splade\Bridge;

use Illuminate\Http\Request;
use Illuminate\View\Component;
use Throwable;

class ComponentState
{
    /**
     * Serializes the component instance to a string, gzips it and then encrpyts it.
     */
    public function encryptInstance(Component $component): string
    {
        return encrypt(gzencode(serialize($component), 9));
    }

    /**
     * Decrypts the component string input, ungzips it and then unserializes it.
     */
    public function decryptInstance(string $component): Component
    {
        try {
            return unserialize(gzdecode(decrypt($component)));
        } catch(Throwable $e) {
            report($e);
            throw new CouldNotResolveComponentInstance;
        }
    }

    /**
     * Resolves the component instance from the request and applies the given props.
     */
    public function resolveInstance(Request $request): Component
    {
        return tap($this->decryptInstance((string) $request->input('instance', '')))
            ->_restoreProperties((array) $request->input('props', []));
    }

    /**
     * Generates a signature for the given instance, url and verb.
     */
    public function generateSignature(string $encodedInstance, string $url, string $verb): string
    {
        return hash_hmac('sha256', serialize([
            'instance' => $encodedInstance,
            'url'      => $url,
            'verb'     => strtoupper($verb),
        ]), config('app.key'));
    }

    /**
     * Generates a signature for the given data.
     */
    public function generateSignatureFromDataArray(array $data)
    {
        return $this->generateSignature($data['instance'] ?? '', $data['url'] ?? '', $data['verb'] ?? '');
    }

    /**
     * Validates that the request has a valid signature.
     */
    public function requestHasValidSignature(Request $request, string $signatureKey = 'signature'): bool
    {
        $signature = $this->generateSignatureFromDataArray($request->only('instance', 'url', 'verb'));

        return hash_equals($signature, (string) $request->input($signatureKey, ''));
    }
}
