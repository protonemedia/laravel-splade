<?php

namespace App\Http\Controllers;

use App\Forms\ExampleForm;
use App\Forms\ModelbindingForm;
use App\Forms\MultiForm;
use App\Http\Requests\ExampleFormRequest;
use App\Http\Requests\MultiFieldsFormRequest1;
use App\Http\Requests\MultiFieldsFormRequest2;
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
                    ->name('simple-form')
                    ->method('POST')
                    ->class('space-y-4')
                    ->fields([
                        Input::make('inputText')->label('Standard input text field')->help('Test help 1'),
                        Password::make('inputPassword')->label('Password field')->required(),
                        Textarea::make('inputTextarea')->label('Textarea (with autosize)')->autosize(),
                        Submit::make()->label('Submit'),
                    ])
                    ->data(['inputText' => 'Test value in input text field']),
            ],
        ]);
    }

    public function storeSimple(Request $request)
    {
        $rules = SpladeForm::build()->name('simple-form')->getRules();

        $result = $request->validate($rules);

        return response()->json(['result' => $result]);
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
        return response()->json(['result' => $request->validated()]);
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
        $rules = ModelbindingForm::build()->name('databinding')->getRules();

        $result = $request->validate($rules);

        return response()->json(['result' => $result]);
    }

    public function multifields()
    {
        return view('form.formbuilder', [
            'forms' => [
                MultiForm::class,
                MultiForm::build('multiform2')
                    ->action(route('formbuilder.multifields2.store'))
                    ->fields([
                        Text::make('additional_field')->label('Additional field'),
                    ]),
            ],
        ]);
    }

    public function storeMultifields1(MultiFieldsFormRequest1 $request)
    {
        return response()->json(['result' => $request->validated()]);
    }

    public function storeMultifields2(MultiFieldsFormRequest2 $request)
    {
        return response()->json(['result' => $request->validated()]);
    }
}
