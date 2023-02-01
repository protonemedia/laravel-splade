<?php

namespace App\Http\Controllers;

use App\Http\Requests\AvatarUpload;
use App\Http\Requests\AvatarUploadFileRule;
use App\Http\Requests\TitleWithAvatarUploadFileRule;
use App\Models\Project;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use ProtoneMedia\Splade\Facades\Toast;
use ProtoneMedia\Splade\FileUploads\ExistingFile;
use ProtoneMedia\Splade\FileUploads\HandleSpladeFileUploads;

class FilepondController extends Controller
{
    public function __construct()
    {
        $this->middleware(HandleSpladeFileUploads::for('avatar'))->only('storeSingle');
    }

    public function show()
    {
        return view('form.components.filepond');
    }

    public function showValidation()
    {
        return view('form.components.filepondValidation');
    }

    public function showExisting()
    {
        /** @var User */
        $user = User::firstOrFail();

        return view('form.components.filepondExisting', [
            'avatar'    => ExistingFile::fromMediaLibrary($user->getFirstMedia('avatar')),
            'photos'    => ExistingFile::fromMediaLibrary($user->getMedia('photos'), 'thumb'),
            'documents' => ExistingFile::fromMediaLibrary($user->getMedia('documents')),
        ]);
    }

    public function storeExisting(Request $request)
    {
        $user = User::firstOrFail();

        if ($request->query('form') === 'avatar') {
            HandleSpladeFileUploads::syncMediaLibrary($request, $user, 'avatar', 'avatar');
        } elseif ($request->query('form') === 'photos') {
            HandleSpladeFileUploads::syncMediaLibrary($request, $user, 'photos', 'photos');
        } elseif ($request->query('form') === 'documents') {
            HandleSpladeFileUploads::syncMediaLibrary($request, $user, 'documents', 'documents');
        }

        Toast::info('The photos have been saved.');

        return redirect()->back();
    }

    public function storeSingle(Request $request)
    {
        $request->validate([
            'avatar' => ['required', 'file', 'image'],
        ]);

        $request->file('avatar')->storeAs('avatars', 'avatar.jpg');

        return redirect()->route('navigation.one');
    }

    public function storeMultiple(Request $request)
    {
        HandleSpladeFileUploads::forRequest($request, 'avatars.*');

        $request->validate([
            'avatars'   => ['required', 'array', 'min:2'],
            'avatars.*' => ['required', 'file', 'image'],
        ]);

        $request->file('avatars.0')->storeAs('avatars', 'avatar0.jpg');
        $request->file('avatars.1')->storeAs('avatars', 'avatar1.jpg');

        return redirect()->route('navigation.one');
    }

    public function storeWithRouteMiddleware(Request $request)
    {
        $request->validate([
            'avatar' => ['required', 'file', 'image'],
        ]);

        $request->file('avatar')->storeAs('avatars', 'avatar.jpg');

        return redirect()->route('navigation.one');
    }

    public function storeWithFormRequest(AvatarUpload $request)
    {
        $request->file('avatar')->storeAs('avatars', 'avatar.jpg');

        return redirect()->route('navigation.one');
    }

    public function storeWithFormRequestRuleObject(AvatarUploadFileRule $request)
    {
        $request->file('avatar')->storeAs('avatars', 'avatar.jpg');

        return redirect()->route('navigation.one');
    }

    public function storeWithFormRequestRuleObjectWithTitle(Project $project, TitleWithAvatarUploadFileRule $request)
    {
        $request->file('avatar')->storeAs('avatars', 'avatar.jpg');

        return redirect()->route('navigation.one');
    }
}
