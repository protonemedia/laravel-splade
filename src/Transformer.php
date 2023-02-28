<?php

namespace ProtoneMedia\Splade;

use Illuminate\Http\Resources\Json\JsonResource;
use League\Fractal\TransformerAbstract;
use Spatie\Fractalistic\ArraySerializer;
use Spatie\Fractalistic\Fractal;

class Transformer
{
    private $requireTransformer = false;

    public function requireTransformer(bool $value = true): self
    {
        $this->requireTransformer = $value;

        return $this;
    }

    public function __construct(private SpladeCore $splade)
    {
    }

    public function __invoke(object $instance): mixed
    {
        $instanceClass = get_class($instance);

        $transformer = $this->splade->findTransformerFor($instanceClass);

        if ($transformer === null) {
            throw_if($this->requireTransformer, new InvalidTransformerException("No transformer found for {$instanceClass}"));

            return $instance;
        }

        if (is_subclass_of($transformer, JsonResource::class)) {
            /** @var JsonResource */
            $resource = new $transformer($instance);

            return $resource->resolve();
        }

        if (is_subclass_of($transformer, TransformerAbstract::class)) {
            if (!class_exists(Fractal::class)) {
                throw new InvalidTransformerException(
                    "To use Fractal Transformers, please install the 'spatie/fractalistic' package."
                );
            }

            return Fractal::create($instance, new $transformer, new ArraySerializer)->toArray();
        }

        if (is_callable($transformer)) {
            return $transformer($instance);
        }

        throw new InvalidTransformerException("The transformer for {$instanceClass} is not a valid transformer.");
    }
}
