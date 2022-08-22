<?php

namespace App\Http\Controllers;

use App\Models\Keyword;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Http\Request;

class FormRelationsController
{
    public function belongsToMany()
    {
        return view('form.components.belongs-to-many', [
            'user' => User::first(),

            'tagOptions' => Tag::get()->keyBy->id->map->name,
        ]);
    }

    public function storeBelongsToMany(Request $request)
    {
        $data = $request->validate([
            'tags'   => ['required', 'array'],
            'tags.*' => ['required', 'exists:tags,id'],
        ]);

        User::first()->tags()->sync($data['tags']);

        return redirect()->route('navigation.one');
    }

    //

    public function morphToMany()
    {
        return view('form.components.morph-to-many', [
            'user' => User::first(),

            'keywordOptions' => Keyword::get()->keyBy->id->map->keyword,
        ]);
    }

    public function storeMorphToMany(Request $request)
    {
        $data = $request->validate([
            'keywords'   => ['required', 'array'],
            'keywords.*' => ['required', 'exists:keywords,id'],
        ]);

        User::first()->keywords()->sync($data['keywords']);

        return redirect()->route('navigation.one');
    }

    public function twoForms()
    {
        return view('form.components.two-forms', [
            'firstUser'  => User::skip(0)->first(),
            'secondUser' => User::skip(1)->first(),

            'tagOptions' => Tag::get()->keyBy->id->map->name,
        ]);
    }
}
