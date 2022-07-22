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

    public function title(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function message(string $message): self
    {
        $this->message = $message;

        return $this;
    }

    public function backdrop(bool $value = true): self
    {
        $this->backdrop = $value;

        return $this;
    }

    public function autoDismiss(int $afterSeconds = 15): self
    {
        $this->autoDismiss = $afterSeconds;

        return $this;
    }

    public function position(string $x, string $y): self
    {
        $this->positionX = $x;
        $this->positionY = $y;

        return $this;
    }

    public function leftTop(): self
    {
        return $this->position(static::POSITION_LEFT, static::POSITION_TOP);
    }

    public function centerTop(): self
    {
        return $this->position(static::POSITION_CENTER, static::POSITION_TOP);
    }

    public function rightTop(): self
    {
        return $this->position(static::POSITION_RIGHT, static::POSITION_TOP);
    }

    public function leftCenter(): self
    {
        return $this->position(static::POSITION_LEFT, static::POSITION_CENTER);
    }

    public function center(): self
    {
        return $this->position(static::POSITION_CENTER, static::POSITION_CENTER);
    }

    public function rightCenter(): self
    {
        return $this->position(static::POSITION_RIGHT, static::POSITION_CENTER);
    }

    public function leftBottom(): self
    {
        return $this->position(static::POSITION_LEFT, static::POSITION_BOTTOM);
    }

    public function centerBottom(): self
    {
        return $this->position(static::POSITION_CENTER, static::POSITION_BOTTOM);
    }

    public function rightBottom(): self
    {
        return $this->position(static::POSITION_RIGHT, static::POSITION_BOTTOM);
    }

    public function info(): self
    {
        return $this->style(static::STYLE_INFO);
    }

    public function success(): self
    {
        return $this->style(static::STYLE_SUCCESS);
    }

    public function warning(): self
    {
        return $this->style(static::STYLE_WARNING);
    }

    public function danger(): self
    {
        return $this->style(static::STYLE_DANGER);
    }

    public function style(string $style): self
    {
        $this->style = $style;

        return $this;
    }

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
