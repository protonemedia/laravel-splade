<?php

namespace ProtoneMedia\Splade\Table;

trait HasBulkActions
{
    protected array $bulkActions = [];

    /**
     * Retuns all bul actions.
     */
    public function getBulkActions(): array
    {
        return $this->bulkActions;
    }

    /**
     * Returns a boolean whether this table has bulk actions.
     */
    public function hasBulkActions(): bool
    {
        return !empty($this->bulkActions);
    }

    /**
     * Adds a new bulk action.
     *
     * @return $this
     */
    public function bulkAction(
        string $label,
        callable $each = null,
        callable $before = null,
        callable $after = null,
        bool|string $confirm = '',
        string $confirmText = '',
        string $confirmButton = '',
        string $cancelButton = '',
        bool|string $requirePassword = false,
    ): self {
        $key = count($this->bulkActions);

        $defaultCallback = fn () => 0;

        $this->bulkActions[$key] = new BulkAction(
            key: $key,
            label: $label,
            tableClass: get_class($this->configurator),
            eachCallback: $each ?: $defaultCallback,
            beforeCallback: $before ?: $defaultCallback,
            afterCallback: $after ?: $defaultCallback,
            confirm: $confirm,
            confirmText: $confirmText,
            confirmButton: $confirmButton,
            cancelButton: $cancelButton,
            requirePassword: $requirePassword,
        );

        return $this;
    }
}
