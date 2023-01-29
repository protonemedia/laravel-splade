<?php

namespace ProtoneMedia\Splade;

use Illuminate\Support\Arr;

abstract class AbstractForm
{
    /**
     * The SpladeForm instance.
     *
     * @var \ProtoneMedia\Splade\SpladeForm|null
     */
    private ?SpladeForm $form = null;

    /**
     * Adds fields to the form
     *
     * @return array
     */
    public function fields(): array
    {
        return [];
    }

    /**
     * Helper method to create a new SpladeForm instance.
     *
     * @return \ProtoneMedia\Splade\SpladeForm
     */
    public static function build(...$arguments): SpladeForm
    {
        $form = new static(...$arguments);

        return $form->make();
    }

    /**
     * Creates a new SpladeForm instance with the resource or
     * query builder from the 'build()' method of this class.
     *
     * @return \ProtoneMedia\Splade\SpladeForm
     */
    public function make(): SpladeForm
    {
        if ($this->form) {
            return $this->form;
        }

        return $this->form = tap(
            SpladeForm::build($this->fields()),
            function (SpladeForm $form) {
                $form->setConfigurator($this);
                $this->configure($form);
            }
        );
    }

    /**
     * Configure the given SpladeForm.
     *
     * @param  \ProtoneMedia\Splade\SpladeForm  $table
     * @return void
     */
    public function configure(SpladeForm $form)
    {
        //
    }

    /**
     * Get the rules that are configured for the form
     *
     * @return array
     */
    public static function rules(): array
    {
        $form = self::build();

        return Arr::pluck($form->fields, 'rules', 'basename');
    }
}
