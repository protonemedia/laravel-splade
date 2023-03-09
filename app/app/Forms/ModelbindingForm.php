<?php

namespace App\Forms;

use ProtoneMedia\Splade\AbstractForm;
use ProtoneMedia\Splade\FormBuilder\Datetime;
use ProtoneMedia\Splade\FormBuilder\Select;
use ProtoneMedia\Splade\FormBuilder\Submit;
use ProtoneMedia\Splade\FormBuilder\Text;
use ProtoneMedia\Splade\FormBuilder\Textarea;
use ProtoneMedia\Splade\SpladeForm;

class ModelbindingForm extends AbstractForm
{
    public function configure(SpladeForm $form)
    {
        $form
            ->class('space-y-4')
            ->action(route('formbuilder.model.store'));
    }

    public function fields(): array
    {
        return [
            Datetime::make('publish_from')
                ->label(__('Publish from')),

            Text::make('title')
                ->label(__('Title'))
                ->required(),

            Text::make('slug')
                ->label(__('Slug'))
                ->required(),

            Textarea::make('body')
                ->label(__('Body'))
                ->autosize(),

            Select::make('tags')
                ->label(__('Tags'))
                ->multiple()
                ->choices()
                ->options([
                    'laravel'     => 'laravel',
                    'splade'      => 'splade',
                    'test'        => 'test',
                    'formbuilder' => 'formbuilder',
                    'options'     => 'options',
                ]),

            Submit::make()->label(__('Save')),
        ];
    }
}
