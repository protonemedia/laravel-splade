<?php

namespace ProtoneMedia\Splade\Table;

trait HasBulkActions
{
    protected array $bulkActions = [];

    /**
     * Retuns all bul actions.
     *
     * @return array
     */
    public function getBulkActions(): array
    {
        return $this->bulkActions;
    }

    /**
     * Returns a boolean whether this table has bulk actions.
     *
     * @return bool
     */
    public function hasBulkActions(): bool
    {
        return !empty($this->bulkActions);
    }

    /**
     * Adds a new bulk action.
     *
     * @param  string  $label
     * @param  callable|null  $each
     * @param  callable|null  $before
     * @param  callable|null  $after
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
        );

        return $this;
    }
}
