<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\View\Component;
use ProtoneMedia\Splade\SpladeCore;

class Lazy extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(public SpladeCore $splade)
    {
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        $trace = collect(debug_backtrace(DEBUG_BACKTRACE_PROVIDE_OBJECT, 50))->filter(function ($trace) {
            return ($trace['object'] ?? null) instanceof Lazy
                && ($trace['function'] ?? null) === 'resolveView';
        })->first();

        $key = md5($trace['file'] . '.' . $trace['line']);

        return $this->splade->isLazyRequest()
            ? '{{ $slot }}'
            : view('splade::lazy', [
                'name' => $key,
            ]);
    }

    public function shouldRender()
    {
        return true;
    }
}
