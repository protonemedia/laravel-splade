<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\Contracts\Support\Htmlable;
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

    private function wrapSlotContents($name, Htmlable $html): Htmlable
    {
        $html = implode([
            '<!--START-SPLADE-DYNAMIC-' . $name . '-->',
            $html->toHtml(),
            '<!--END-SPLADE-DYNAMIC-' . $name . '-->',
        ]);

        return new HtmlString($html);
    }

    public function viewData(array $originalData, HtmlString $slot, Factory $env): array
    {
        $slots = Collection::make($env->getFirstSlot())->map(function (ComponentSlot $slot, $name) {
            return new ComponentSlot(
                $this->wrapSlotContents($name, $slot)->toHtml(),
                $slot->attributes->getAttributes()
            );
        });

        return array_merge(
            $originalData,
            $slots->all(),
            ['slot' => $this->wrapSlotContents('slot', $slot)]
        );
    }
}
