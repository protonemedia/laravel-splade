<?php

namespace ProtoneMedia\Splade;

abstract class AbstractForm
{
    /**
     * The SpladeForm instance.
     */
    private ?SpladeForm $for = null;

    /**
     * Adds fields to the form
     */
    public function fields(): array
    {
        return [];
    }

    /**
     * Helper method to create a new SpladeForm instance.
     *
     * @param  mixed  ...$arguments
     */
    public static function make(...$arguments): SpladeForm
    {
        $form = new static(...$arguments);

        return $form->build();
    }

    /**
     * Creates a new SpladeForm instance from the 'build()' method of this class
     */
    public function build(): SpladeForm
    {
        if ($this->for) {
            return $this->for;
        }

        return $this->for = tap(
            SpladeForm::make($this->fields()),
            function (SpladeForm $form) {
                $form->setConfigurator($this);
                $this->configure($form);
            }
        );
    }

    /**
     * Configure the given SpladeForm.
     *
     * @param  SpladeForm  $table
     * @return void
     */
    public function configure(SpladeForm $form)
    {
        //
    }

    /**
     * Get the rules that are configured for the form
     *
     * @param  mixed  ...$arguments
     */
    public static function rules(...$arguments): array
    {
        return self::make(...$arguments)->getRules();
    }
}
