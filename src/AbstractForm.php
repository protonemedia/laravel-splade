<?php

namespace ProtoneMedia\Splade;

use Illuminate\Support\Facades\Cache;

abstract class AbstractForm
{
    /**
     * The SpladeForm instance.
     *
     * @var SpladeForm|null
     */
    private ?SpladeForm $for = null;

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
     * @param mixed ...$arguments
     * @return SpladeForm
     */
    public static function build(...$arguments): SpladeForm
    {
        $form = new static(...$arguments);

        $name = is_string($arguments[0] ?? '') ? array_shift($arguments) : '';

        return $form->make($name);
    }

    /**
     * Creates a new SpladeForm instance from the 'build()' method of this class
     *
     * @param string|null $name
     * @return SpladeForm
     */
    public function make(?string $name): SpladeForm
    {
        if ($this->for) {
            return $this->for;
        }

        return $this->for = tap(
            SpladeForm::build($this->fields())->name($name ?? ''),
            function (SpladeForm $form) {
                $form->setConfigurator($this);
                $this->configure($form);
            }
        );
    }

    /**
     * Configure the given SpladeForm.
     *
     * @param SpladeForm $table
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
    public static function rules(string $name = ''): array
    {
        return Cache::get('SpladeFormbuilderRules' . ($name ? '.' . $name : ''), self::build($name)->getRules());
    }
}
