<?php

namespace ProtoneMedia\Splade;

class BladeHelpers
{
    /**
     * Returns a regex pattern to match an HTML tag and its contents.
     */
    public static function regexForTag(string $tag): string
    {
        return '/(<\s*' . $tag . '[^>]*>)(.|\n)*?(<\/' . $tag . '>)/';
    }
}
