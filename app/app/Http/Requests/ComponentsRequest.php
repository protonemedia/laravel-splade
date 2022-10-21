<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ComponentsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    private function countries(): array
    {
        return collect(json_decode(file_get_contents(resource_path('iso3166.json'))))
            ->keyBy->{'alpha-2'}
            ->map->name
            ->all();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name'      => ['required', 'string'],
            'password'  => ['required', 'string'],
            'secret'    => ['required', 'string'],
            'file'      => ['required', 'file'],
            'files'     => ['required', 'array', 'min:2'],
            'files.*'   => ['required', 'file'],
            'date'      => ['required', 'string'],
            'time'      => ['required', 'string'],
            'biography' => ['required', 'string'],
            'options'   => ['required', 'array', 'min:1'],
            'language'  => ['required', 'in:en,nl'],
            'country'   => ['required', 'string', Rule::in(array_keys($this->countries()))],
            'terms'     => ['required', 'boolean', 'accepted'],
        ];
    }
}
