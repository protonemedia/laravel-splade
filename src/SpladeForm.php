<?php

namespace ProtoneMedia\Splade;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class SpladeForm
{
    protected ?AbstractForm $configurator = null;

    protected array|Model $data = [];

    protected array $fields = [];

    protected array $options = [];

    protected array|string $class = [];

    protected string $id = '';

    protected string $action = '';

    protected string $method = 'POST';

    public function __construct(array $fields = [])
    {
        $this->fields($fields);
    }

    /**
     * Helper method to create a new SpladeForm instance.
     *
     * @return \ProtoneMedia\Splade\SpladeForm
     */
    public static function make(array $fields = []): static
    {
        return new static($fields);
    }

    /**
     * Sets the class that configurates the form.
     *
     * @return $this
     */
    public function setConfigurator(AbstractForm $configurator): self
    {
        $this->configurator = $configurator;

        return $this;
    }

    /**
     * Sets the id for the form.
     *
     * @return $this
     */
    public function id(string $id = ''): self
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Sets the action for the form.
     *
     * @return $this
     */
    public function action(string $action = 'POST'): self
    {
        $this->action = $action;

        return $this;
    }

    /**
     * Add css-class(es) to the form.
     *
     * @return $this
     */
    public function class(array|string $class): self
    {
        $this->class = $class;

        return $this;
    }

    /**
     * Enables the confirmation dialog on submit.
     *
     * @return $this
     */
    public function confirm(
        string|bool $confirm = true,
        ?string $text = null,
        ?string $confirmButton = null,
        ?string $cancelButton = null,
        bool $danger = false,
        string|bool $requirePassword = false,
        bool $requirePasswordOnce = false
    ): self {
        $this->options['confirm']               = !$danger ? $confirm : false;
        $this->options['confirm_danger']        = $danger ? $confirm : false;
        $this->options['text']                  = $text;
        $this->options['confirm_button']        = $confirmButton;
        $this->options['cancel_button']         = $cancelButton;
        $this->options['require_password']      = $requirePassword;
        $this->options['require_password_once'] = $requirePasswordOnce;

        return $this;
    }

    /**
     * Sets the values for the form fields.
     *
     * @return $this
     */
    public function fill($data): self
    {
        $this->data = $data;

        return $this;
    }

    /**
     * Adds fields to the form.
     *
     * @return $this
     */
    public function fields(array $fields = []): self
    {
        $this->fields = array_merge($this->fields, $fields);

        return $this;
    }

    /**
     * Prevent the page from scrolling to the top after submit.
     *
     * @param  bool  $stay
     * @return $this
     */
    public function preserveScroll(bool $preserve_scroll = true): self
    {
        $this->options['preserve_scroll'] = $preserve_scroll;

        return $this;
    }

    /**
     * Require the user to confirm their password within the confirmation dialog.
     *
     * Add `Route::spladePasswordConfirmation();` to your routes to make this work.
     *
     * @return $this
     */
    public function requirePassword(
        bool $requirePasswordOnce = false,
        ?string $heading = null,
        ?string $text = null,
        ?string $confirmButton = null,
        ?string $cancelButton = null,
        bool $danger = false
    ): self {
        return $this->confirm(
            confirm: $heading ?? true,
            text: $text,
            confirmButton: $confirmButton,
            cancelButton: $cancelButton,
            danger: $danger,
            requirePassword: true,
            requirePasswordOnce: $requirePasswordOnce
        );
    }

    /**
     * Prevent navigation on submit.
     *
     * @param  string  $actionOnSuccess reset|restore
     * @return $this
     */
    public function stay(bool $stay = true, string $actionOnSuccess = ''): self
    {
        $this->options['stay'] = $stay;

        $this->options['reset_on_success']   = $actionOnSuccess === 'reset';
        $this->options['restore_on_success'] = $actionOnSuccess === 'restore';

        return $this;
    }

    /**
     * Submit the form whenever a value changes.
     *
     * If one or morge fieldnames are provided in $watch_fields,
     * the form will only be submitted on changes on these fields.
     *
     * @param  array|string|null  $watchFields
     * @return $this
     */
    public function submitOnChange(
        bool $enabled = true,
        array|string|null $watchFields = null,
        bool $background = true,
        int $debounce = 500
    ): self {
        $this->options['submit_on_change'] = $enabled ? ($watchFields ?? true) : false;
        $this->options['background']       = $enabled ? $background : null;
        $this->options['debounce']         = $enabled ? $debounce : null;

        return $this;
    }

    /**
     * Set the method of the form.
     *
     * @return $this
     */
    public function method(string $method = 'POST'): self
    {
        $this->method = $method;

        return $this;
    }

    /**
     * Returns the id for the form.
     */
    public function getId(): string
    {
        return $this->id;
    }

    /**
     * Returns the action for the form.
     */
    public function getAction(): string
    {
        return $this->action;
    }

    /**
     * Returns the data for the form.
     */
    public function getClass(): array|string
    {
        return $this->class;
    }

    /**
     * Returns the data for the form.
     */
    public function getData()
    {
        return $this->data;
    }

    /**
     * Returns all fields of the form.
     */
    public function getFields(): array
    {
        return $this->fields;
    }

    /**
     * Returns the method for the form.
     */
    public function getMethod(): string
    {
        return $this->method;
    }

    /**
     * Return an option for the form arguments.
     */
    public function getOption(string $option): array|bool|string|null
    {
        return $this->options[$option] ?? false;
    }

    /**
     * Returns the forms rules.
     */
    public function getRules(): array
    {
        return Arr::pluck($this->getFields(), 'rules', 'dottedName');
    }

    /**
     * Validate the request with the rules of the form.
     *
     * @param [type] ...$params
     */
    public function validate(?Request $request = null, ...$params): array
    {
        /** @var Request */
        $request = $request ?? request();

        return $request->validate($this->getRules(), ...$params);
    }
}
