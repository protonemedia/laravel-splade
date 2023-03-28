<?php

namespace ProtoneMedia\Splade\FormBuilder;

use ProtoneMedia\Splade\Components\Form\Select as SpladeSelect;

class Select extends Component
{
    protected array $options = [];

    protected string $placeholder = '';

    protected bool $multiple = false;

    protected array|bool $choices = true;

    protected string $remoteUrl = '';

    protected string $remoteRoute = '';

    protected string $optionLabel = '';

    protected string $optionValue = '';

    protected bool|null $resetOnNewRemoteUrl = null;

    protected bool|null $selectFirstRemoteOption = null;

    public function options(array $options = []): self
    {
        $this->options = $options;

        return $this;
    }

    /**
     * Add a placeholder to the field
     *
     * @param  bool  $required
     * @return $this
     */
    public function placeholder(string $placeholder = ''): self
    {
        $this->placeholder = $placeholder;

        return $this;
    }

    public function multiple(bool $multiple = true): self
    {
        $this->multiple = $multiple;

        return $this;
    }

    public function choices(array|bool $choices = true): self
    {
        $this->choices = $choices;

        return $this;
    }

    public function remoteUrl(string $remoteUrl = ''): self
    {
        $this->remoteUrl = $remoteUrl;

        return $this;
    }

    public function remoteRoute(string $remoteRoute = ''): self
    {
        $this->remoteRoute = $remoteRoute;

        return $this;
    }

    public function optionLabel(string $optionLabel = ''): self
    {
        $this->optionLabel = $optionLabel;

        return $this;
    }

    public function optionValue(string $optionValue = ''): self
    {
        $this->optionValue = $optionValue;

        return $this;
    }

    public function resetOnNewRemoteUrl(bool $value = true)
    {
        $this->resetOnNewRemoteUrl = $value;

        return $this;
    }

    public function selectFirstRemoteOption(bool $value = true)
    {
        $this->selectFirstRemoteOption = $value;

        return $this;
    }

    /**
     * Renders the SpladeSelect
     *
     * @return \Closure|\Illuminate\Contracts\View\View|string
     */
    public function toSpladeComponent()
    {
        return new SpladeSelect(
            name:        $this->name,
            options:     $this->options,
            label:       $this->label,
            placeholder: $this->placeholder,
            multiple:    $this->multiple,
            choices:     $this->choices,
            help:        $this->help,
            remoteUrl:   $this->remoteUrl,
            remoteRoot:  $this->remoteRoute,
            optionValue: $this->optionValue,
            optionLabel: $this->optionLabel,
            resetOnNewRemoteUrl: $this->resetOnNewRemoteUrl,
            selectFirstRemoteOption: $this->selectFirstRemoteOption
        );
    }
}
