<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\Support\Collection;
use Illuminate\Support\HtmlString;
use Illuminate\View\Component;
use Illuminate\View\ComponentSlot;
use Illuminate\View\Factory;

abstract class PersistentComponent extends Component
{
    public function resolveView()
    {
        $original = parent::resolveView();

        return view('splade::persistent-layout', [
            'originalName' => $original->name(),
            'originalData' => $original->getData(),
        ]);
    }

    private function wrapSlot($name, $html): string
    {
        return implode([
            '<!--START-SPLADE-DYNAMIC-' . $name . '-->',
            $html,
            '<!--END-SPLADE-DYNAMIC-' . $name . '-->',
        ]);
    }

    public function viewData(array $originalData, HtmlString $slot, Factory $env)
    {
        if (!Factory::hasMacro('getSlotsForSplade')) {
            Factory::macro('getSlotsForSplade', function () {
                return $this->slots;
            });
        }

        $slots = Collection::make($env->getSlotsForSplade())->collapse()->map(function (ComponentSlot $slot, $name) {
            return new ComponentSlot(
                $this->wrapSlot($name, $slot->toHtml()),
                $slot->attributes->getAttributes()
            );
        });

        $wrappedSlot = $this->wrapSlot('slot', $slot->toHtml());

        return array_merge(
            $originalData,
            $slots->all(),
            [
                'slot' => new HtmlString($wrappedSlot),
            ],
        );
    }
}
