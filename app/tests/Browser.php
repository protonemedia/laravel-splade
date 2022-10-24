<?php

namespace Tests;

use Laravel\Dusk\Browser as BaseBrowser;
use PHPUnit\Framework\Assert as PHPUnit;

class Browser extends BaseBrowser
{
    public function assertLinkCanonical($href)
    {
        $driverHref = $this->driver->executeScript('return document.querySelector("link[rel=\"canonical\"]")?.getAttribute("href")');

        PHPUnit::assertEquals(
            $href,
            $driverHref,
            "Canonical link expected href [{$href}] does not equal actual href [{$driverHref}]."
        );

        return $this;
    }

    public function assertMetaByName($name, $content)
    {
        $driverContent = $this->driver->executeScript('return document.querySelector("meta[name=\"' . $name . '\"]")?.getAttribute("content")');

        PHPUnit::assertEquals(
            $content,
            $driverContent,
            "Meta with name [{$name}] expected content [{$content}] does not equal actual title [{$driverContent}]."
        );

        return $this;
    }
}
