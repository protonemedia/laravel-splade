<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Pipeline\Pipeline;
use Illuminate\Routing\Router;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\HtmlString;
use Illuminate\Support\Str;
use Illuminate\View\Component;
use Illuminate\View\View;
use JsonSerializable;
use ProtoneMedia\Splade\Bridge\ComponentState;
use ProtoneMedia\Splade\Bridge\MiddlewareException;
use ProtoneMedia\Splade\Transformer;
use ReflectionClass;
use ReflectionMethod;

/**
 * @mixin Component
 */
trait WithVue
{
    use SerializesNewModels;

    /**
     * It resolves the original view, which is the actual view that the user
     * expects, and wraps it in the Splade Vue Bridge Component.
     *
     * @return \Illuminate\Contracts\View\View
     */
    public function resolveView()
    {
        $original = parent::resolveView();

        if ($original instanceof View) {
            $renderless = $original->name() === 'splade::functional.slot';

            return view('splade::functional.vue-bridge', $renderless ? [] : [
                'originalName' => $original->name(),
                'originalData' => $original->getData(),
            ]);
        }

        return view('splade::functional.vue-bridge', [
            'component' => new HtmlString($this->view($original, $this->data())->render()),
        ]);
    }

    /**
     * Apply the given middleware to the request.
     *
     * @param  string|array  $middleware
     * @return mixed
     */
    public function middleware($middleware = null)
    {
        $middleware = Arr::wrap($middleware);

        if (empty($middleware)) {
            return false;
        }

        /** @var Router */
        $router = app(Router::class);

        $middleware = $router->resolveMiddleware($middleware);

        $response = (new Pipeline(app()))
            ->send($request = request())
            ->through($middleware)
            ->thenReturn();

        if ($response === $request) {
            return false;
        }

        throw MiddlewareException::fromResponse($response);
    }

    /**
     * Gathers all data about this component so Vue understand its capabilities and structure.
     */
    public function _vueData(): array
    {
        /** @var ComponentState */
        $componentState = app(ComponentState::class);

        return tap([
            'data'      => (object) $this->_data(),
            'instance'  => $componentState->encryptInstance($this),
            'methods'   => $methods = $this->_availableMethods(),
            'scope'     => implode(', ', array_merge($methods, ['props'])),
            'signature' => null,
            'url'       => url()->current(),
            'verb'      => request()->method(),
        ], fn (array &$data) => $data['signature'] = $componentState->generateSignatureFromDataArray($data));
    }

    /**
     * Gathers all methods that can be called by the Vue component.
     */
    public function _availableMethods(): array
    {
        $ignoredMethods = [
            '_availableMethods',
            '_restoreProperties',
            '_vueData',
            'middleware',
            'restoreModel',
        ];

        $reflection = new ReflectionClass(Component::class);

        foreach ($reflection->getMethods(ReflectionMethod::IS_PUBLIC) as $componentMethod) {
            if ($componentMethod->isPublic()) {
                $ignoredMethods[] = $componentMethod->getName();
            }
        }

        return array_keys(Arr::except($this->extractPublicMethods(), $ignoredMethods));
    }

    /**
     * Loop through all properties and when Vue has posted a matching key,
     * it will apply to the property.
     *
     * @return void
     */
    public function _restoreProperties(array $data)
    {
        $properties = (new ReflectionClass($this))->getProperties();

        foreach ($properties as $property) {
            if ($property->isStatic() || !$property->isPublic() || !$property->isInitialized($this)) {
                continue;
            }

            $name = $property->getName();

            if ($name === 'componentName' || $name === 'attributes') {
                continue;
            }

            if (!array_key_exists($name, $data)) {
                continue;
            }

            $value = $this->getPropertyValue($property);

            if (!$value instanceof JsonSerializable) {
                // Just set the property with the value from the data.
                $this->{$name} = $data[$name];

                continue;
            }

            // Transform the data to a dotted array and then set each key individually.
            Collection::make(Arr::dot($data[$name]))->each(function ($dottedValue, $dottedKey) use ($value) {
                if (!Str::contains($dottedKey, '.')) {
                    return static::_fill($value, $dottedKey, $dottedValue);
                }

                $lastKey   = Str::afterLast($dottedKey, '.');
                $parentKey = Str::beforeLast($dottedKey, '.');

                $target = data_get($value, $parentKey);

                static::_fill($target, $lastKey, $dottedValue);
            });
        }
    }

    /**
     * A little helper method that force the use of the fill
     * method on an Eloquent Model so the filled/guarded attributes are respected.
     */
    private static function _fill(&$target, $key, $value)
    {
        $originalValue = data_get($target, $key);

        if ($originalValue === $value) {
            // Only set dirty attributes.
            return;
        }

        if ($target instanceof Collection && $originalValue instanceof Model && !$value) {
            // Don't override Models without visible values with an empty array.
            return;
        }

        if ($target instanceof Model) {
            return $target->fill([$key => $value]);
        }

        data_set($target, $key, $value);
    }

    /**
     * Gathers all data that will be two-way bound to the Vue component.
     */
    private function _data(): array
    {
        $values = [];

        $properties = (new ReflectionClass($this))->getProperties();

        /** @var Transformer */
        $transformer = app(Transformer::class);

        foreach ($properties as $property) {
            if ($property->isStatic() || !$property->isPublic() || !$property->isInitialized($this)) {
                continue;
            }

            $name = $property->getName();

            if ($name === 'componentName' || $name === 'attributes') {
                continue;
            }

            $value = $this->getPropertyValue($property);

            $value = is_object($value) ? $transformer($value) : $value;

            if ($value instanceof Model) {
                $value = (object) $value->jsonSerialize();
            }

            if ($value instanceof Collection) {
                $value = $value->map(function ($item) {
                    if ($item instanceof Model) {
                        return (object) $item->jsonSerialize();
                    }

                    return $item;
                })->jsonSerialize();
            }

            if ($value instanceof JsonSerializable) {
                $value = $value->jsonSerialize();
            }

            $values[$name] = $this->getSerializedPropertyValue($value);
        }

        return $values;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('splade::functional.slot');
    }
}
