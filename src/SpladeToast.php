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
     *
     * @param  string  $message
     * @param  string  $title
     * @param  string  $style
     * @param  string  $positionX
     * @param  string  $positionY
     * @param  bool  $backdrop
     * @param  int|null  $autoDismiss
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
     * @param  string  $title
     * @return self
     */
    public function title(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Only sets the message if it's not empty.
     *
     * @param  string  $message
     * @return self
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
     * @param  string  $message
     * @return self
     */
    public function message(string $message): self
    {
        $this->message = $message;

        return $this;
    }

    /**
     * Sets a boolean whether a backdrop should be used.
     *
     * @param  bool  $value
     * @return self
     */
    public function backdrop(bool $value = true): self
    {
        $this->backdrop = $value;

        return $this;
    }

    /**
     * Setter for auto dismissing the toast after the given seconds.
     *
     * @param  int  $afterSeconds
     * @return self
     */
    public function autoDismiss(int $afterSeconds = 15): self
    {
        $this->autoDismiss = $afterSeconds;

        return $this;
    }

    /**
     * Setter for the position of the toast.
     *
     * @param  string  $x
     * @param  string  $y
     * @return self
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
     * @param  string  $message
     * @return self
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
     * @param  string  $message
     * @return self
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
     * @param  string  $message
     * @return self
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
     * @param  string  $message
     * @return self
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
     * @param  string  $message
     * @return self
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
     * @param  string  $message
     * @return self
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
     * @param  string  $message
     * @return self
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
     * @param  string  $message
     * @return self
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
     * @param  string  $message
     * @return self
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
     * @param  string  $message
     * @return self
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
     * @param  string  $message
     * @return self
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
     * @param  string  $message
     * @return self
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
     * @param  string  $message
     * @return self
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
     * @param  string  $style
     * @return self
     */
    public function style(string $style): self
    {
        $this->style = $style;

        return $this;
    }

    /**
     * Returns an array with all data.
     *
     * @return array
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
            'html'         => view('splade::toast', $this->toArray())->render(),
        ];
    }
}
