<?php

namespace App\Http\Controllers;

use App\Forms\ExampleForm;
use App\Forms\ModelbindingForm;
use App\Forms\MultiForm;
use App\Http\Requests\ExampleFormRequest;
use App\Http\Requests\MultiFieldsFormRequest;
use App\Models\Post;
use Illuminate\Http\Request;
use ProtoneMedia\Splade\Components\FormBuilder\Input;
use ProtoneMedia\Splade\Components\FormBuilder\Password;
use ProtoneMedia\Splade\Components\FormBuilder\Submit;
use ProtoneMedia\Splade\Components\FormBuilder\Text;
use ProtoneMedia\Splade\Components\FormBuilder\Textarea;
use ProtoneMedia\Splade\SpladeForm;

class FormbuilderController
{
    public function simple()
    {
        return view('form.formbuilder', [
            'forms' => [
                SpladeForm::build()
                    ->action(route('formbuilder.simple.store'))
                    ->method('POST')
                    ->class('space-y-4')
                    ->fields([
                        Input::make('inputText')->label('Standard input text field')->help('Test help 1'),
                        Password::make('inputPassword')->label('Password field'),
                        Textarea::make('inputTextarea')->label('Textarea (with autosize)')->autosize(),
                        Submit::make()->label('Submit'),
                    ])
                    ->data(['inputText' => 'Test value in input text field']),
            ],
        ]);
    }

    public function storeSimple(Request $request)
    {
        return response()->json(['result' => $request->all()]);
    }

    public function fromClass()
    {
        return view('form.formbuilder', [
            'forms' => [
                ExampleForm::class
            ],
        ]);
    }

    public function storeFromClass(ExampleFormRequest $request)
    {
        $validated = $request->validated();

        dd($validated);
    }

    public function model()
    {
        $post = new Post([
            'title' => 'Test post 1',
            'slug' => 'test-post-1',
            'body' => '<p>This is the posts body</b>',
            'publish_from' => now()->hour(12)->minute(30),
            'tags' => ['laravel', 'splade'],
        ]);

        return view('form.formbuilder', [
            'forms' => [
                ModelbindingForm::build()->data($post),
            ],
        ]);
    }

    public function storeModel(Request $request)
    {
        dd($request->all());
    }

    public function multifields()
    {
        return view('form.formbuilder', [
            'forms' => [
                MultiForm::class,
            ],
        ]);
    }

    public function storeMultifields(MultiFieldsFormRequest $request)
    {
        $validated = $request->validated();

        dd($validated);
    }
}
