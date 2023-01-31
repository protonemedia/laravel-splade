<?php

namespace Tests;

use Facebook\WebDriver\Remote\LocalFileDetector;
use Illuminate\Support\Str;
use Laravel\Dusk\Browser as BaseBrowser;
use PHPUnit\Framework\Assert as PHPUnit;

class Browser extends BaseBrowser
{
    public function getTextIn($selector): string
    {
        return $this->resolver->findOrFail($selector)->getText();
    }

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

    public function attachToFilepond($path)
    {
        $element = $this->resolver->firstOrFail(['input[type=file].filepond--browser']);

        $element->setFileDetector(new LocalFileDetector)->sendKeys($path);

        $filename = pathinfo($path, PATHINFO_BASENAME);

        if ($element->getAttribute('data-server') === 'false') {
            return $this->waitForText($filename)->pause(250);
        }

        $assistants = $this->resolver->all('.filepond--assistant');

        return $this->waitUsing(10, 50, function () use ($assistants, $filename) {
            foreach ($assistants as $assistant) {
                if (Str::contains($assistant->getText(), ["{$filename} Upload complete"])) {
                    return true;
                }
            }

            return false;
        })->pause(250);
    }
}
