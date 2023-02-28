<?php

namespace ProtoneMedia\Splade;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use League\Fractal\TransformerAbstract;
use Spatie\Fractalistic\ArraySerializer;
use Spatie\Fractalistic\Fractal;
use Traversable;

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

    private function canBeTransformed($value): bool
    {
        if (is_array($value) || $value instanceof Traversable) {
            return $this->canBeTransformed(Arr::first($value));
        }

        return is_object($value);
    }

    public function __invoke($instance): mixed
    {
        if (!$this->canBeTransformed($instance)) {
            return $instance;
        }

        $transformer = $this->splade->findTransformerFor($instance);

        $instanceName = is_object($instance) ? get_class($instance) : 'array';

        if ($transformer === null) {
            throw_if($this->requireTransformer, new InvalidTransformerException("No transformer found for {$instanceName}"));

            return $instance;
        }

        if (is_subclass_of($transformer, TransformerAbstract::class)) {
            if (!class_exists(Fractal::class)) {
                throw new InvalidTransformerException(
                    "To use Fractal Transformers, please install the 'spatie/fractalistic' package."
                );
            }

            return Fractal::create($instance, new $transformer, new ArraySerializer)->toArray();
        }

        if (is_array($instance) || $instance instanceof Traversable) {
            $instance = $instance instanceof Collection ? $instance : Collection::make($instance);
        }

        if (is_subclass_of($transformer, JsonResource::class)) {
            /** @var JsonResource */
            $resource = $instance instanceof Collection
                ? $transformer::collection($instance)
                : new $transformer($instance);

            return $resource->resolve();
        }

        if (is_callable($transformer)) {
            return $instance instanceof Collection
                ? $instance->map($transformer)->all()
                : $transformer($instance);
        }

        throw new InvalidTransformerException("The transformer for {$instanceName} is not a valid transformer.");
    }
}
