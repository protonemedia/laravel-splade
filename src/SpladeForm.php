<?php

namespace ProtoneMedia\Splade;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Cache;

class SpladeForm
{
    protected ?AbstractForm $configurator = null;
    protected Request $request;
    protected array $data = [];
    protected array $fields = [];
    protected array $options = [];
    protected array $rules = [];
    protected array|string $class = [];
    protected string $action = '';
    protected string $method = 'POST';
    protected string $name = '';

    public function __construct(array $fields, Request $request = null)
    {
        $this->request = $request ?: request();

        $this->fields = $fields;

        $this->setRules();
    }

    /**
     * Helper method to create a new SpladeForm instance.
     *
     * @return SpladeForm
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
     * Enables the confirmation dialog on submit.
     *
     * Add `Route::spladePasswordConfirmation();` to your routes if use $require_password-options
     *
     * @param string|bool $confirm
     * @param string|null $text
     * @param string|null $confirm_button
     * @param string|null $cancel_button
     * @param bool $danger
     * @param string|bool $require_password true|false|fieldname
     * @param bool $require_password_once
     * @return $this
     */
    public function confirm(
        string|bool $confirm = true,
        ?string $text = null,
        ?string $confirm_button = null,
        ?string $cancel_button = null,
        bool $danger = false,
        string|bool $require_password = false,
        bool $require_password_once = false
    ): self
    {
        $this->options['confirm'] = !$danger ? $confirm : false;
        $this->options['confirm_danger'] = $danger ? $confirm : false;
        $this->options['text'] = $text;
        $this->options['confirm_button'] = $confirm_button;
        $this->options['cancel_button'] = $cancel_button;
        $this->options['require_password'] = $require_password;
        $this->options['require_password_once'] = $require_password_once;

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
     * Name for this form, used as a key to remember the validation rules
     *
     * @param  string  $name
     * @return $this
     */
    public function name(string $name): self
    {
        // An AbstractForm-class may not overwrite the name that was set using ::build('name'),
        // so only set the name if it was empty before.
        if (empty($this->name)) {
            $this->name = $name;
        }

        return $this;
    }

    /**
     * Adds fields to the form
     *
     * @param array $fields
     * @return $this
     */
    public function fields(array $fields = []): self
    {
        $this->fields = array_merge($this->fields, $fields);

        $this->setRules();

        return $this;
    }

    /**
     * Extracts the rules from the fields
     *
     * @return void
     */
    public function setRules(): self
    {
        $this->rules = Arr::pluck($this->getFields(), 'rules', 'basename');

        Cache::put('SpladeFormbuilderRules' . ($this->name ? '.' . $this->name : ''), $this->rules);

        return $this;
    }

    /**
     * Prevent the page from scrolling to the top after submit
     *
     * @param bool $stay
     * @return $this
     */
    public function preserveScroll(bool $preserve_scroll = true): self
    {
        $this->options['preserve_scroll'] = $preserve_scroll;

        return $this;
    }

    /**
     * Require the user to confirm their password within the confirmation dialog
     *
     * Add `Route::spladePasswordConfirmation();` to your routes to make this work
     *
     * @param bool $require_password_once
     * @param string|null $heading
     * @param string|null $text
     * @param string|null $confirm_button
     * @param string|null $cancel_button
     * @param bool $danger
     * @return $this
     */
    public function requirePassword(
        bool $require_password_once = false,
        ?string $heading = null,
        ?string $text = null,
        ?string $confirm_button = null,
        ?string $cancel_button = null,
        bool $danger = false
    ): self
    {
        return $this->confirm(
            confirm: $heading ?? true,
            text: $text,
            confirm_button: $confirm_button,
            cancel_button: $cancel_button,
            danger: $danger,
            require_password: true,
            require_password_once: $require_password_once
        );
    }

    /**
     * Prevent navigation on submit
     *
     * @param bool $stay
     * @param string $action_on_success reset|restore
     * @return $this
     */
    public function stay(bool $stay = true, string $action_on_success = ''): self
    {
        $this->options['stay'] = $stay;

        $this->options['reset_on_success'] = $action_on_success === 'reset';
        $this->options['restore_on_success'] = $action_on_success === 'restore';

        return $this;
    }

    /**
     * Submit the form whenever a value changes.
     *
     * If one or morge fieldnames are provided in $watch_fields,
     * the form will only be submitted on changes on these fields
     *
     * @param bool $enabled
     * @param array|string|null $watch_fields
     * @param bool $background
     * @param int $debounce
     * @return $this
     */
    public function submitOnChange(
        bool $enabled = true,
        array|string|null $watch_fields = null,
        bool $background = true,
        int $debounce = 500
    ): self
    {
        $this->options['submit_on_change'] = $enabled ? ($watch_fields ?? true) : false;
        $this->options['background'] = $enabled ? $background : null;
        $this->options['debounce'] = $enabled ? $debounce : null;

        return $this;
    }

    /**
     * Set the method of the form
     *
     * @param string $method
     * @return $this
     */
    public function method(string $method = 'POST'): self
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
     * Returns all fields of the form
     *
     * @return array
     */
    public function getFields(): array
    {
        return $this->fields;
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
     * Returns the name of the form
     *
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * Return an option for the form arguments
     *
     * @param string $option
     * @return array|bool|string|null
     */
    public function getOption(string $option): array|bool|string|null
    {
        return $this->options[$option] ?? false;
    }

    /**
     * Returns the forms rules
     *
     * @return array
     */
    public function getRules(): array
    {
        return Cache::get('SpladeFormbuilderRules' . ($this->name ? '.' . $this->name : ''), $this->rules);
    }
}
