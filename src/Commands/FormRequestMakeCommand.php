<?php

namespace ProtoneMedia\Splade\Commands;

use Illuminate\Foundation\Console\RequestMakeCommand;
use Illuminate\Support\Str;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Input\InputOption;

#[AsCommand(name: 'make:form-request')]
class FormRequestMakeCommand extends RequestMakeCommand
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'make:form-request';

    /**
     * The type of class being generated.
     *
     * @var string
     */
    protected $type = 'Form Request';

    /**
     * The name of the console command.
     *
     * This name is used to identify the command during lazy loading.
     *
     * @var string|null
     *
     * @deprecated
     */
    protected static $defaultName = 'make:form-request';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new form request class for a Splade Form';

    /**
     * Get the stub file for the generator.
     *
     * @return string
     */
    protected function getStub()
    {
        return $this->resolveStubPath('/stubs/splade.request.stub');
    }

    /**
     * Resolve the fully-qualified path to the stub.
     *
     * @param  string  $stub
     * @return string
     */
    protected function resolveStubPath($stub)
    {
        return file_exists($customPath = $this->laravel->basePath(trim($stub, '/')))
            ? $customPath
            : __DIR__ . $stub;
    }

    /**
     * Build the class with the given name.
     *
     * @param  string  $name
     * @return string
     */
    protected function buildClass($name)
    {
        $namespaceForm = $this->option('form')
            ? $this->qualifyForm($this->option('form'))
            : $this->qualifyForm($this->guessFormName($name));

        $form = class_basename($namespaceForm);

        $formName = strtolower($form);

        $replace = [
            '{{ namespacedForm }}' => $namespaceForm,
            '{{namespacedForm}}'   => $namespaceForm,
            '{{ form }}'           => $form,
            '{{form}}'             => $form,
            '{{ name }}'           => $formName,
            '{{name}}'             => $formName,
        ];

        return str_replace(
            array_keys($replace), array_values($replace), parent::buildClass($name)
        );
    }

    /**
     * Qualify the given form class base name.
     *
     * @return string
     */
    protected function qualifyForm(string $form)
    {
        $form = ltrim($form, '\\/');

        $form = str_replace('/', '\\', $form);

        $rootNamespace = $this->rootNamespace();

        if (Str::startsWith($form, $rootNamespace)) {
            return $form;
        }

        return is_dir(app_path('Forms'))
            ? $rootNamespace . 'Forms\\' . $form
            : $rootNamespace . $form;
    }

    /**
     * Guess the form name from the Request name or return a default model name.
     *
     * @param  string  $name
     * @return string
     */
    protected function guessFormName($name)
    {
        if (str_ends_with($name, 'FormRequest')) {
            $name = substr(class_basename($name), 0, -11);
        }

        $formName = $this->qualifyForm(Str::after($name, $this->rootNamespace()));

        if (class_exists($formName)) {
            return $formName;
        }

        if (class_exists($formName . 'Form')) {
            return $formName . 'Form';
        }

        if (is_dir(app_path('Forms/'))) {
            return $this->rootNamespace() . 'Forms\Form';
        }

        return $this->rootNamespace() . 'Form';
    }

    /**
     * Get the console command options.
     *
     * @return array
     */
    protected function getOptions()
    {
        return array_merge(parent::getOptions(), [
            ['form', 'F', InputOption::VALUE_OPTIONAL, 'The name of the form'],
        ]);
    }
}
