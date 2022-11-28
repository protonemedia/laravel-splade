<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\File;
use ProtoneMedia\Splade\FileUploads\HasSpladeFileUploads;

class TitleWithAvatarUploadFileRule extends FormRequest implements HasSpladeFileUploads
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

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'title' => [
                'required',
                'string',
                'max:255',
                Rule::unique('projects', 'name')->ignore($this->project->id ?? null),
            ],

            'avatar' => ['required', File::image()],
        ];
    }
}
