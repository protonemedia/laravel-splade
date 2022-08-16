<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use ProtoneMedia\Splade\Components\Form\Input;
use ProtoneMedia\Splade\Components\Form\Select;

class FormComponentsController
{
    private function countries(): array
    {
        return collect(json_decode(file_get_contents(resource_path('iso3166.json'))))
            ->keyBy->{'alpha-2'}
            ->map->name
            ->all();
    }

    public function simple()
    {
        return view('form.components.simple', ['countries' => $this->countries()]);
    }

    public function defaults()
    {
        Select::defaultChoices();

        Input::defaultDateFormat('d-m-Y');
        Input::defaultTimeFormat('i:H');
        Input::defaultDatetimeFormat('d-m-Y H:i');
        Input::defaultFlatpickr(['showMonths' => 2, 'defaultHour' => 20]);

        return view('form.components.simple', ['countries' => $this->countries()]);
    }

    public function libraries()
    {
        return view('form.components.libraries', ['countries' => $this->countries()]);
    }

    public function custom()
    {
        return view('form.components.custom', ['countries' => $this->countries()]);
    }

    public function submit(Request $request)
    {
        $request->validate([
            'name'      => ['required', 'string'],
            'password'  => ['required', 'string'],
            'secret'    => ['required', 'string'],
            'file'      => ['required', 'file'],
            'files'     => ['required', 'array', 'min:2'],
            'files.*'   => ['required', 'file'],
            'date'      => ['required', 'string'],
            'time'      => ['required', 'string'],
            'biography' => ['required', 'string'],
            'options'   => ['required', 'array', 'min:1'],
            'language'  => ['required', 'in:en,nl'],
            'country'   => ['required', 'string', Rule::in(array_keys($this->countries()))],
            'terms'     => ['required', 'boolean', 'accepted'],
        ]);

        return redirect()->route('navigation.one');
    }
}
