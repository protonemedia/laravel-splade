<?php

namespace ProtoneMedia\Splade\Components;

use Illuminate\View\Component;

class Toggle extends Component
{
    use ParsesJsonDataAttribute;

    public array $toggles;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(public $data = 'default')
    {
        if (is_string($data)) {
            $this->toggles = collect(explode(',', $data))
                ->map(fn ($key) => trim($key))
                ->filter()
                ->mapWithKeys(fn ($key) => [$key => false])
                ->all();
        } elseif (is_bool($data)) {
            $this->toggles = ['default' => $data];
        } else {
            $this->toggles = $this->parseJsonData($data) ?: ['default' => false];
        }
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        $toggles = collect($this->toggles)->keys();

        return view('splade::functional.toggle', [
            'props' => $toggles->all() === ['default']
                ? implode(', ', ['toggle', 'setToggle', 'toggled'])
                : collect($this->toggles)->keys()->merge([
                    'toggle', 'setToggle', 'toggled',
                ])->implode(', '),
        ]);
    }
}
