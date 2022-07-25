<?php

use App\Events\RedirectEvent;
use App\Events\RefreshEvent;
use App\Events\SimpleEvent;
use App\Events\ToastEvent;
use App\Http\Controllers\BackFormController;
use App\Http\Controllers\FileFormController;
use App\Http\Controllers\SimpleFormController;
use App\Http\Controllers\SlowFormController;
use App\Http\Controllers\ToastController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use ProtoneMedia\Splade\Facades\Splade;

Route::post('defer/api', function () {
    sleep(1);

    return Str::reverse(request('api'));
})->name('defer.api');

Route::get('event/redirect', fn () => event(new RedirectEvent))->name('event.redirect');
Route::get('event/refresh', fn () => event(new RefreshEvent))->name('event.refresh');
Route::get('event/simple', fn () => event(new SimpleEvent))->name('event.simple');
Route::get('event/toast', fn () => event(new ToastEvent))->name('event.toast');

Route::middleware('splade')->group(function () {
    Route::view('data/binding', 'data.binding')->name('data.binding');
    Route::view('data/default', 'data.default')->name('data.default');
    Route::view('data/eloquent', 'data.eloquent')->name('data.eloquent');
    Route::view('data/remember', 'data.remember')->name('data.remember');
    Route::view('data/localStorage', 'data.localStorage')->name('data.localStorage');
    Route::view('data/rememberWithDefault', 'data.rememberWithDefault')->name('data.rememberWithDefault');

    Route::view('defer', 'defer')->name('defer');
    Route::view('errors', 'errors')->name('errors');

    Route::view('event', 'event')->name('event');

    Route::get('flash/put', function () {
        session()->flash('message', 'This is a message');

        return redirect()->route('flash');
    });

    Route::view('flash', 'flash')->name('flash');

    Route::view('form/simple', 'form.simple')->name('form.simple');
    Route::post('form/simple', SimpleFormController::class)->name('form.simple.submit');
    Route::post('form/slow', SlowFormController::class)->name('form.slow.submit');
    Route::post('form/back', BackFormController::class)->name('form.back.submit');

    Route::view('form/confirm', 'form.confirm')->name('form.confirm');
    Route::view('form/customConfirm', 'form.customConfirm')->name('form.customConfirm');
    Route::view('form/file', 'form.file')->name('form.file');
    Route::post('form/file', FileFormController::class)->name('form.file.submit');
    Route::view('form/restore', 'form.restore')->name('form.restore');
    Route::view('form/reset', 'form.reset')->name('form.reset');
    Route::view('form/processing', 'form.processing')->name('form.processing');

    Route::view('form/array', 'form.array')->name('form.array');
    Route::view('form/arrayable', 'form.arrayable')->name('form.arrayable');
    Route::view('form/default', 'form.default')->name('form.default');
    Route::view('form/eloquent', 'form.eloquent')->name('form.eloquent');
    Route::view('form/json', 'form.json')->name('form.json');
    Route::view('form/jsonable', 'form.jsonable')->name('form.jsonable');
    Route::view('form/jsonSerializable', 'form.jsonSerializable')->name('form.jsonSerializable');

    Route::view('navigation/one', 'navigation.one')->name('navigation.one');
    Route::view('navigation/two', 'navigation.two')->name('navigation.two');
    Route::view('navigation/three', 'navigation.three')->name('navigation.three');
    Route::view('navigation/form', 'navigation.form')->name('navigation.form');
    Route::get('navigation/notFound', fn () => abort(404))->name('navigation.notFound');
    Route::get('navigation/serverError', fn () => throw new Exception('Whoops!'))->name('navigation.serverError');

    Route::view('modal/base', 'modal.base')->name('modal.base');
    Route::view('modal/one', 'modal.one')->name('modal.one');
    Route::view('modal/two', 'modal.two')->name('modal.two');
    Route::view('modal/slideover', 'modal.slideover')->name('modal.slideover');

    Route::post('state', function () {
        Splade::share('info', 'This is invalid');

        throw ValidationException::withMessages(['name' => 'Whoops!']);
    });

    Route::get('state', function () {
        session()->flash('message', 'This is a message');

        Splade::share('info', 'This is shared');

        return view('state');
    })->name('state');

    Route::get('toast/infoLeftTop', [ToastController::class, 'infoLeftTop'])->name('toast.infoLeftTop');
    Route::get('toast/infoCenterTop', [ToastController::class, 'infoCenterTop'])->name('toast.infoCenterTop');
    Route::get('toast/infoRightTop', [ToastController::class, 'infoRightTop'])->name('toast.infoRightTop');
    Route::get('toast/infoLeftCenter', [ToastController::class, 'infoLeftCenter'])->name('toast.infoLeftCenter');
    Route::get('toast/successCenter', [ToastController::class, 'successCenter'])->name('toast.successCenter');
    Route::get('toast/warningRightCenter', [ToastController::class, 'warningRightCenter'])->name('toast.warningRightCenter');
    Route::get('toast/dangerLeftBottom', [ToastController::class, 'dangerLeftBottom'])->name('toast.dangerLeftBottom');
    Route::get('toast/infoCenterBottom', [ToastController::class, 'infoCenterBottom'])->name('toast.infoCenterBottom');
    Route::get('toast/infoRightBottom', [ToastController::class, 'infoRightBottom'])->name('toast.infoRightBottom');

    Route::view('toggle/default', 'toggle.default')->name('toggle.default');
    Route::view('toggle/multipleDefaults', 'toggle.multipleDefaults')->name('toggle.multipleDefaults');
    Route::view('toggle/single', 'toggle.single')->name('toggle.single');
    Route::view('toggle/multiple', 'toggle.multiple')->name('toggle.multiple');
});
