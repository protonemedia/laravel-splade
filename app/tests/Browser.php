<?php

namespace Tests;

use Laravel\Dusk\Browser as BaseBrowser;
use PHPUnit\Framework\Assert as PHPUnit;

class Browser extends BaseBrowser
{
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
