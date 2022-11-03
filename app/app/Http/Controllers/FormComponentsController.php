<?php

namespace App\Http\Controllers;

use App\Models\Dummy;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Fluent;
use Illuminate\Validation\Rule;
use ProtoneMedia\Splade\Components\Form;
use ProtoneMedia\Splade\Components\Form\Input;
use ProtoneMedia\Splade\Components\Form\Select;

class FormComponentsController
{
    private function countries(): array
    {
        return app('countries.keyValue');
    }

    public function simple()
    {
        return view('form.components.simple', ['countries' => $this->countries()]);
    }

    public function vmodel()
    {
        return view('form.components.vmodel', ['countries' => $this->countries()]);
    }

    public function checkbox()
    {
        return view('form.components.checkbox');
    }

    public function checkboxes()
    {
        return view('form.components.checkboxes', [
            'countries' => Arr::only($this->countries(), ['NL', 'BE', 'DE', 'DK', 'AU', 'PT', 'IT']),
        ]);
    }

    public function submitCheckboxes(Request $request)
    {
        $request->validate([
            'countries'   => ['required', 'array', 'min:3'],
            'countries.*' => ['required', 'string', Rule::in(array_keys($this->countries()))],
        ]);

        return redirect()->route('navigation.one');
    }

    public function radios()
    {
        return view('form.components.radios', [
            'countries' => Arr::only($this->countries(), ['NL', 'BE', 'DE', 'DK', 'AU', 'PT', 'IT']),
        ]);
    }

    public function submitRadios(Request $request)
    {
        $request->validate([
            'country' => ['required', 'string', Rule::in(array_keys($this->countries()))],
        ]);

        return redirect()->route('navigation.one');
    }

    public function defaultJson()
    {
        return view('form.components.defaultJson');
    }

    public function defaultPhp()
    {
        return view('form.components.defaultPhp');
    }

    public function arrays()
    {
        return view('form.components.arrays');
    }

    public function submitValue()
    {
        return view('form.components.submitValue');
    }

    public function submitValueSubmit(Request $request)
    {
        $data = $request->validate([
            'approve' => ['required', 'in:0,1'],
        ]);

        return redirect()->route('form.components.submitValue', ['approved' => $data['approve']]);
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

    public function libraryDefaults()
    {
        return view('form.components.libraryDefaults', [
            'defaults' => [
                'biography' => 'Voluptate ea culpa proident proident qui nostrud non ea irure ullamco in non reprehenderit.',
                'country'   => 'NL',
                'countries' => ['BE', 'NL'],
                'date'      => '2022-07-22',
                'time'      => '13:37',
                'datetime'  => '2022-07-22 13:37',
                'daterange' => '2022-07-22 to 2022-08-22',
            ],
            'countries' => $this->countries(),
        ]);
    }

    public function librarySubmitOnChange()
    {
        return view('form.components.librarySubmitOnChange', [
        ]);
    }

    public function submitOnChange(Request $request)
    {
        $request->validate([
            'name' => ['required', 'min:3'],
        ]);

        return redirect()->route('navigation.one');
    }

    public function libraryChange()
    {
        return view('form.components.libraryChange', [
            'defaults' => [
                'biography' => 'Voluptate ea culpa proident proident qui nostrud non ea irure ullamco in non reprehenderit.',
                'country'   => 'NL',
                'countries' => ['BE', 'NL'],
                'date'      => '2022-07-22',
                'time'      => '13:37',
                'datetime'  => '2022-07-22 13:37',
                'daterange' => '2022-07-22 to 2022-08-22',
            ],
            'countries' => $this->countries(),
        ]);
    }

    public function custom()
    {
        return view('form.components.custom', ['countries' => $this->countries()]);
    }

    public function eloquent()
    {
        return view('form.components.eloquent', ['dummy' => Dummy::first()]);
    }

    public function fluent()
    {
        return view('form.components.fluent', ['dummy' => new Fluent([
            'input'    => 'input',
            'textarea' => 'textarea',
            'select'   => 'b',
            'checkbox' => true,
            'radio'    => 'b',
            'json'     => ['nested' => ['array'], 'key' => 'key'],
            'secret'   => 'secret',
        ])]);
    }

    public function unguarded()
    {
        return view('form.components.unguarded', ['dummy' => [
            'input'  => 'input',
            'secret' => 'secret',
        ]]);
    }

    public function defaultUnguarded()
    {
        Form::defaultUnguarded();

        return view('form.components.fluent', ['dummy' => [
            'input'  => 'input',
            'secret' => 'secret',
        ]]);
    }

    public function relation()
    {
        $project = Project::first();

        return view('form.components.relation', [
            'project' => $project,
        ]);
    }

    public function customSelectOptions()
    {
        return view('form.components.customSelectOptions');
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

    public function selectAsync(Request $request)
    {
        $countries = array_keys($this->countries());

        $request->validate([
            'country_a' => ['required', 'string', Rule::in($countries)],
            'country_b' => ['required', 'string', Rule::in($countries)],
            'country_c' => ['required', 'string', Rule::in($countries)],
            'country_d' => ['required', 'string', Rule::in($countries)],

            'countries_a' => ['required', 'array', 'min:1'],
            'countries_b' => ['required', 'array', 'min:1'],
            'countries_c' => ['required', 'array', 'min:1'],
            'countries_d' => ['required', 'array', 'min:1'],

            'countries_a.*' => ['required', 'string', Rule::in($countries)],
            'countries_b.*' => ['required', 'string', Rule::in($countries)],
            'countries_c.*' => ['required', 'string', Rule::in($countries)],
            'countries_d.*' => ['required', 'string', Rule::in($countries)],
        ]);

        return redirect()->route('navigation.one');
    }
}
