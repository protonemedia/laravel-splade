<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\Support\HtmlString;
use Illuminate\View\Component;

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

    public function wrapSlot(HtmlString $slot)
    {
        $html = implode([
            '<!--START-SPLADE-DYNAMIC-SLOT-->',
            $slot->toHtml(),
            '<!--END-SPLADE-DYNAMIC-SLOT-->',
        ]);

        return new HtmlString($html);
    }
}
