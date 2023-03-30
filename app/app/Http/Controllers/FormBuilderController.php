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
use ProtoneMedia\Splade\FormBuilder\Input;
use ProtoneMedia\Splade\FormBuilder\Password;
use ProtoneMedia\Splade\FormBuilder\Submit;
use ProtoneMedia\Splade\FormBuilder\Text;
use ProtoneMedia\Splade\FormBuilder\Textarea;
use ProtoneMedia\Splade\SpladeForm;

class FormBuilderController
{
    private function simpleForm()
    {
        return SpladeForm::make()
            ->action(route('formbuilder.simple.store'))
            ->id('simple-form')
            ->method('POST')
            ->class('space-y-4')
            ->fields([
                Input::make('inputText')->label('Standard input text field')->help('Test help 1'),
                Password::make('inputPassword')->label('Password field')->required(),
                Textarea::make('inputTextarea')->label('Textarea (with autosize)')->autosize(),
                Submit::make()->label('Submit'),
            ])
            ->fill(['inputText' => 'Test value in input text field']);
    }

    public function simple()
    {
        return view('form.formbuilder', [
            'forms' => [$this->simpleForm()],
        ]);
    }

    public function storeSimple(Request $request)
    {
        $result = $request->validate($this->simpleForm()->getRules());

        return response()->json(['result' => $result]);
    }

    public function fromClass()
    {
        return view('form.formbuilder', [
            'forms' => [
                ExampleForm::class,
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
            'title'        => 'Test post 1',
            'slug'         => 'test-post-1',
            'body'         => '<p>This is the posts body</p>',
            'publish_from' => now(),
            'tags'         => ['laravel', 'splade'],
        ]);

        return view('form.formbuilder', [
            'forms' => [
                ModelbindingForm::make()->fill($post),
            ],
        ]);
    }

    public function storeModel(Request $request, ModelbindingForm $form)
    {
        $result = $form->validate($request);

        return response()->json(['result' => $result]);
    }

    public function multifields()
    {
        return view('form.formbuilder', [
            'forms' => [
                MultiForm::class,
                MultiForm::make()->id('multiform2')
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
