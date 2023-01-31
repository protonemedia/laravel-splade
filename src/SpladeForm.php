<?php

namespace ProtoneMedia\Splade;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class SpladeForm
{
    protected ?AbstractForm $configurator = null;
    protected Request $request;
    protected array $data = [];
    protected array $fields;
    protected array|string $class = [];
    protected string $action = '';
    protected string $method = 'POST';

    public function __construct(array $fields, Request $request = null)
    {
        $this->request = $request ?: request();

        $this->fields = $fields;
    }

    /**
     * Helper method to create a new SpladeForm instance.
     *
     * @return \ProtoneMedia\Splade\SpladeForm
     */
    public static function build(array $fields = []): static
    {
        return new static($fields);
    }

    /**
     * Sets the class that configurates the form.
     *
     * @param  AbstractForm  $configurator
     * @return $this
     */
    public function setConfigurator(AbstractForm $configurator): self
    {
        $this->configurator = $configurator;

        return $this;
    }

    /**
     * Sets the action for the form
     *
     * @param string $action
     * @return $this
     */
    public function action(string $action = 'POST'): self
    {
        $this->action = $action;

        return $this;
    }

    /**
     * Add css-class(es) to the form
     *
     * @param array|string $class
     * @return $this
     */
    public function class(array|string $class): self
    {
        $this->class = $class;

        return $this;
    }

    /**
     * Sets the values for the form fields
     *
     * @param Model|array $data
     * @return $this
     */
    public function data(Model|array $data): self
    {
        if ($data instanceof Model) {
            $data = $data->toArray();
        }

        $this->data = $data;

        return $this;
    }

    /**
     * Adds fields to the form
     *
     * @param array $fields
     * @return $this
     */
    public function fields(array $fields): self
    {
        $this->fields = $fields;

        return $this;
    }

    /**
     * Set the method of the form
     *
     * @param string $method
     * @return $this
     */
    public function method(string $method): self
    {
        $this->method = $method;

        return $this;
    }

    /**
     * Returns the action for the form
     *
     * @return string
     */
    public function getAction(): string
    {
        return $this->action;
    }

    /**
     * Returns the data for the form
     *
     * @return array|string
     */
    public function getClass(): array|string
    {
        return $this->class;
    }

    /**
     * Returns the data for the form
     *
     * @return array
     */
    public function getData(): array
    {
        return $this->data;
    }

    /**
     * Returns the method for the form
     *
     * @return string
     */
    public function getMethod(): string
    {
        return $this->method;
    }

    /**
     * Returns all fields of the form
     *
     * @return array
     */
    public function getFields(): array
    {
        return $this->fields;
    }
}
