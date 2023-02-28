<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Support\Collection;
use Illuminate\Support\HtmlString;
use Illuminate\View\Component;
use Illuminate\View\ComponentSlot;
use Illuminate\View\Factory;
use ProtoneMedia\Splade\Facades\Splade;
use ProtoneMedia\Splade\SpladeCore;

abstract class PersistentComponent extends Component
{
    /**
     * It resolves the original view, which is the actual view that the user
     * expects, and wraps it in the Splade Persistent Layout component.
     *
     * @return \Illuminate\Contracts\View\View
     */
    public function resolveView()
    {
        $original = parent::resolveView();

        app(SpladeCore::class)->setPersistentLayoutKey(md5($original->name()));

        return view('splade::functional.persistent-layout', [
            'originalName' => $original->name(),
            'originalData' => $original->getData(),
        ]);
    }

    /**
     * Wraps the given HTML in Splade Dynamic comments.
     */
    private function wrapSlotContents(string $name, Htmlable $html): Htmlable
    {
        $html = implode([
            '<!--START-SPLADE-DYNAMIC-' . $name . '-->',
            $html->toHtml(),
            '<!--END-SPLADE-DYNAMIC-' . $name . '-->',
        ]);

        return new HtmlString($html);
    }

    /**
     * It wraps the default slot and all other slots from the factory
     * into Splade Dynamic comments, and merges them it the
     * default data from the original view.
     */
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
