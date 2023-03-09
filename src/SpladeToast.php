<?php

namespace ProtoneMedia\Splade;

use Illuminate\Contracts\Support\Arrayable;
use JsonSerializable;

class SpladeToast implements Arrayable, JsonSerializable
{
    const STYLE_INFO = 'info';

    const STYLE_SUCCESS = 'success';

    const STYLE_WARNING = 'warning';

    const STYLE_DANGER = 'danger';

    const POSITION_LEFT = 'left';

    const POSITION_CENTER = 'center';

    const POSITION_RIGHT = 'right';

    const POSITION_TOP = 'top';

    const POSITION_BOTTOM = 'bottom';

    /**
     * Creates a new toast instance.
     */
    public function __construct(
        private string $message,
        private string $title = '',
        private string $style = 'success',
        private string $positionX = 'right',
        private string $positionY = 'top',
        private bool $backdrop = false,
        private ?int $autoDismiss = null,
    ) {
    }

    /**
     * Setter for the title of the toast.
     *
     * @return $this
     */
    public function title(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Only sets the message if it's not empty.
     *
     * @return $this
     */
    private function optionalMessage(string $message): self
    {
        if (trim($message) === '') {
            return $this;
        }

        return $this->message($message);
    }

    /**
     * Setter for the message.
     *
     * @return $this
     */
    public function message(string $message): self
    {
        $this->message = $message;

        return $this;
    }

    /**
     * Sets a boolean whether a backdrop should be used.
     *
     * @return $this
     */
    public function backdrop(bool $value = true): self
    {
        $this->backdrop = $value;

        return $this;
    }

    /**
     * Setter for auto dismissing the toast after the given seconds.
     *
     * @return $this
     */
    public function autoDismiss(int $afterSeconds = 15): self
    {
        $this->autoDismiss = $afterSeconds;

        return $this;
    }

    /**
     * Setter for the position of the toast.
     *
     * @return $this
     */
    public function position(string $x, string $y): self
    {
        $this->positionX = $x;
        $this->positionY = $y;

        return $this;
    }

    /**
     * Positions the toast at the left top.
     *
     * @return $this
     */
    public function leftTop(string $message = ''): self
    {
        return $this
            ->optionalMessage($message)
            ->position(static::POSITION_LEFT, static::POSITION_TOP);
    }

    /**
     * Positions the toast at the center top.
     *
     * @return $this
     */
    public function centerTop(string $message = ''): self
    {
        return $this
            ->optionalMessage($message)
            ->position(static::POSITION_CENTER, static::POSITION_TOP);
    }

    /**
     * Positions the toast at the right top.
     *
     * @return $this
     */
    public function rightTop(string $message = ''): self
    {
        return $this
            ->optionalMessage($message)
            ->position(static::POSITION_RIGHT, static::POSITION_TOP);
    }

    /**
     * Positions the toast at the left center.
     *
     * @return $this
     */
    public function leftCenter(string $message = ''): self
    {
        return $this
            ->optionalMessage($message)
            ->position(static::POSITION_LEFT, static::POSITION_CENTER);
    }

    /**
     * Positions the toast at the center.
     *
     * @return $this
     */
    public function center(string $message = ''): self
    {
        return $this
            ->optionalMessage($message)
            ->position(static::POSITION_CENTER, static::POSITION_CENTER);
    }

    /**
     * Positions the toast at the right center.
     *
     * @return $this
     */
    public function rightCenter(string $message = ''): self
    {
        return $this
            ->optionalMessage($message)
            ->position(static::POSITION_RIGHT, static::POSITION_CENTER);
    }

    /**
     * Positions the toast at the left bottom.
     *
     * @return $this
     */
    public function leftBottom(string $message = ''): self
    {
        return $this
            ->optionalMessage($message)
            ->position(static::POSITION_LEFT, static::POSITION_BOTTOM);
    }

    /**
     * Positions the toast at the center bottom.
     *
     * @return $this
     */
    public function centerBottom(string $message = ''): self
    {
        return $this
            ->optionalMessage($message)
            ->position(static::POSITION_CENTER, static::POSITION_BOTTOM);
    }

    /**
     * Positions the toast at the right bottom.
     *
     * @return $this
     */
    public function rightBottom(string $message = ''): self
    {
        return $this
            ->optionalMessage($message)
            ->position(static::POSITION_RIGHT, static::POSITION_BOTTOM);
    }

    /**
     * Sets the style to 'info'.
     *
     * @return $this
     */
    public function info(string $message = ''): self
    {
        return $this
            ->optionalMessage($message)
            ->style(static::STYLE_INFO);
    }

    /**
     * Sets the style to 'success'.
     *
     * @return $this
     */
    public function success(string $message = ''): self
    {
        return $this
            ->optionalMessage($message)
            ->style(static::STYLE_SUCCESS);
    }

    /**
     * Sets the style to 'warning'.
     *
     * @return $this
     */
    public function warning(string $message = ''): self
    {
        return $this
            ->optionalMessage($message)
            ->style(static::STYLE_WARNING);
    }

    /**
     * Sets the style to 'danger'.
     *
     * @return $this
     */
    public function danger(string $message = ''): self
    {
        return $this
            ->optionalMessage($message)
            ->style(static::STYLE_DANGER);
    }

    /**
     * Setter for the style.
     *
     * @return $this
     */
    public function style(string $style): self
    {
        $this->style = $style;

        return $this;
    }

    /**
     * Returns an array with all data.
     */
    public function toArray(): array
    {
        return [
            'autoDismiss' => $this->autoDismiss,
            'backdrop'    => $this->backdrop,
            'message'     => $this->message,
            'positionX'   => $this->positionX,
            'positionY'   => $this->positionY,
            'style'       => $this->style,
            'title'       => $this->title,
            'isDanger'    => $this->style === static::STYLE_DANGER,
            'isInfo'      => $this->style === static::STYLE_INFO,
            'isSuccess'   => $this->style === static::STYLE_SUCCESS,
            'isWarning'   => $this->style === static::STYLE_WARNING,
        ];
    }

    /**
     * Returns a rendered view of the toast along with some meta data.
     *
     * @return array
     */
    public function jsonSerialize(): mixed
    {
        return [
            'splade.toast' => true,
            'backdrop'     => $this->backdrop,
            'position'     => "{$this->positionX}-{$this->positionY}",
            'html'         => view('splade::components.toast', $this->toArray())->render(),
        ];
    }
}
