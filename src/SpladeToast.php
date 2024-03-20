<?php

namespace ProtoneMedia\Splade;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Support\HtmlString;
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
        private HtmlString|string $message,
        private HtmlString|string $title = '',
        private string $style = 'success',
        private string $positionX = 'right',
        private string $positionY = 'top',
        private bool $backdrop = false,
        private ?int $autoDismiss = null,
    ) {
        $this->message($message);
        $this->title($title);
    }

    /**
     * Setter for the title of the toast.
     *
     * @return $this
     */
    public function title(HtmlString|string $title = ''): self
    {
        if ($title instanceof HtmlString && trim($title->toHtml()) === '') {
            $title = '';
        }

        if (is_string($title)) {
            $title = new HtmlString(nl2br(e($title)));
        }

        $this->title = $title;

        return $this;
    }

    /**
     * Only sets the message if it's not empty.
     *
     * @return $this
     */
    private function optionalMessage(HtmlString|string $message = ''): self
    {
        if (is_string($message) && trim($message) === '') {
            return $this;
        }

        if ($message instanceof HtmlString && trim($message->toHtml()) === '') {
            return $this;
        }

        return $this->message($message);
    }

    /**
     * Setter for the message.
     *
     * @return $this
     */
    public function message(HtmlString|string $message = ''): self
    {
        if ($message instanceof HtmlString && trim($message->toHtml()) === '') {
            $message = '';
        }

        if (is_string($message)) {
            $message = new HtmlString(nl2br(e($message)));
        }

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
    public function leftTop(HtmlString|string $message = ''): self
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
    public function centerTop(HtmlString|string $message = ''): self
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
    public function rightTop(HtmlString|string $message = ''): self
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
    public function leftCenter(HtmlString|string $message = ''): self
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
    public function center(HtmlString|string $message = ''): self
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
    public function rightCenter(HtmlString|string $message = ''): self
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
    public function leftBottom(HtmlString|string $message = ''): self
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
    public function centerBottom(HtmlString|string $message = ''): self
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
    public function rightBottom(HtmlString|string $message = ''): self
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
    public function info(HtmlString|string $message = ''): self
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
    public function success(HtmlString|string $message = ''): self
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
    public function warning(HtmlString|string $message = ''): self
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
    public function danger(HtmlString|string $message = ''): self
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
    public function style(HtmlString|string $style): self
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
