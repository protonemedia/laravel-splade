<?php

namespace App\Http\Controllers;

use Illuminate\Support\Collection;
use Illuminate\Support\Str;

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
        return $this->countries()->pluck('name', 'alpha-2')->all();
    }

    public function objects()
    {
        return $this->countries()->all();
    }

    public function provinces($country)
    {
        return Collection::make(
            json_decode(file_get_contents(resource_path('provinces.json')))
        )->where(fn ($value, $key) => Str::startsWith($key, $country))->sort()->all();
    }
}
