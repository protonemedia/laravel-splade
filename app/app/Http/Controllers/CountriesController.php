<?php

namespace App\Http\Controllers;

use Illuminate\Support\Collection;

class CountriesController
{
    private function countries(): Collection
    {
        return Collection::make(
            json_decode(file_get_contents(resource_path('iso3166.json')))
        );
    }

    public function keyValue()
    {
        return $this->countries()->pluck('alpha-2', 'name')->all();
    }

    public function objects()
    {
        return $this->countries()->all();
    }
}
