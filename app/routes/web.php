<?php

use App\Events\RedirectEvent;
use App\Events\RefreshEvent;
use App\Events\RefreshPreserveScrollEvent;
use App\Events\SimpleEvent;
use App\Events\ToastEvent;
use App\Http\Controllers\BackFormController;
use App\Http\Controllers\CountriesController;
use App\Http\Controllers\FileFormController;
use App\Http\Controllers\FilepondController;
use App\Http\Controllers\FormBuilderController;
use App\Http\Controllers\FormComponentsController;
use App\Http\Controllers\FormRedirectController;
use App\Http\Controllers\FormRelationsController;
use App\Http\Controllers\FormViewController;
use App\Http\Controllers\LazyController;
use App\Http\Controllers\ModalController;
use App\Http\Controllers\NavigationController;
use App\Http\Controllers\NestedFormController;
use App\Http\Controllers\SimpleFormController;
use App\Http\Controllers\SlowFormController;
use App\Http\Controllers\TableController;
use App\Http\Controllers\ToastController;
use App\Http\Controllers\TwoFieldsFormController;
use App\Http\UserTableView;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use ProtoneMedia\Splade\Facades\Splade;
use ProtoneMedia\Splade\FileUploads\HandleSpladeFileUploads;
use ProtoneMedia\Splade\SpladeCore;

Route::post('defer/api', function () {
    sleep(1);

    return Str::reverse(request('api'));
})->name('defer.api');

Route::post('defer/poll', function () {
    sleep(1);

    return Cache::increment('deferPoll');
})->name('defer.pollIncrement');

Route::get('defer/input/{input}', function ($input) {
    return [
        'input' => $input,
    ];
})->name('defer.input');

Route::get('login/redirect', function () {
    return redirect()->route('navigation.one');
})->name('login');

Route::get('event/redirect', fn () => event(new RedirectEvent))->name('event.redirect');
Route::get('event/refresh', fn () => event(new RefreshEvent))->name('event.refresh');
Route::get('event/refreshPreserveScroll', fn () => event(new RefreshPreserveScrollEvent))->name('event.refreshPreserveScroll');
Route::get('event/simple', fn () => event(new SimpleEvent))->name('event.simple');
Route::get('event/toast', fn () => event(new ToastEvent))->name('event.toast');

Route::middleware('splade')->group(function () {
    Route::spladePasswordConfirmation();
    Route::spladeTable();
    Route::spladeUploads();
    Route::spladeWithVueBridge();

    Route::get('/api/countries/keyValue', [CountriesController::class, 'keyValue'])->name('api.countries.keyValue');
    Route::get('/api/countries/objects', [CountriesController::class, 'objects'])->name('api.countries.objects');
    Route::get('/api/provinces/{country}', [CountriesController::class, 'provinces'])->name('api.countries.provinces');

    Route::view('content', 'content', [
        'html' => file_get_contents(resource_path('rendered_markdown.html')),
    ])->name('content');

    Route::view('bridge/arguments', 'bridge.arguments')->name('bridge.arguments');
    Route::view('bridge/inline', 'bridge.inline')->name('bridge.inline');
    Route::view('bridge/method', 'bridge.method')->name('bridge.method');
    Route::view('bridge/props', 'bridge.props')->name('bridge.props');
    Route::view('bridge/render', 'bridge.render')->name('bridge.render');

    Route::view('buttons', 'buttons')->name('buttons');
    Route::view('custom', 'custom')->name('custom');
    Route::view('data/binding', 'data.binding')->name('data.binding');
    Route::view('data/default', 'data.default')->name('data.default');
    Route::view('data/eloquent', 'data.eloquent')->name('data.eloquent');
    Route::view('data/global-1', 'data.global-1')->name('data.global-1');
    Route::view('data/global-2', 'data.global-2')->name('data.global-2');
    Route::view('data/nestedStore', 'data.nestedStore')->name('data.nestedStore');
    Route::view('data/remember', 'data.remember')->name('data.remember');
    Route::view('data/localStorage', 'data.localStorage')->name('data.localStorage');
    Route::view('data/rememberWithDefault', 'data.rememberWithDefault')->name('data.rememberWithDefault');

    Route::view('defer', 'defer')->name('defer');
    Route::view('defer/poll', 'deferPoll')->name('deferPoll');
    Route::view('defer/watch', 'deferWatch')->name('deferWatch');
    Route::view('defer/url', 'deferUrl')->name('deferUrl');
    Route::view('defer/requestAttribute', 'deferRequestAttribute')->name('defer.requestAttribute');

    Route::view('errors', 'errors')->name('errors');

    Route::view('event', 'event')->name('event');
    Route::view('eventPreserveScroll', 'eventPreserveScroll')->name('eventPreserveScroll');

    Route::get('flash/put', function () {
        return redirect()->route('flash')->with('message', 'This is a message');
    });

    Route::view('flash', 'flash')->name('flash');

    Route::get('form/redirect', [FormRedirectController::class, 'show'])->name('form.redirect.show');
    Route::post('form/redirect', [FormRedirectController::class, 'submit'])->name('form.redirect.submit');

    Route::view('form/simple', 'form.simple')->name('form.simple');
    Route::post('form/simple', SimpleFormController::class)->name('form.simple.submit');
    Route::view('form/emit', 'form.emit')->name('form.emit');
    Route::view('form/readImage', 'form.readImage')->name('form.readImage');
    Route::view('form/get', 'form.get')->name('form.get');
    Route::get('form/getData', SimpleFormController::class)->name('form.get.submit');
    Route::view('form/put', 'form.put')->name('form.put');
    Route::put('form/put', SimpleFormController::class)->name('form.put.submit');
    Route::post('form/slow', SlowFormController::class)->name('form.slow.submit');
    Route::post('form/back', BackFormController::class)->name('form.back.submit');
    Route::post('form/twoFields', TwoFieldsFormController::class)->name('form.twoFields.submit');

    Route::view('form/submitOnChange', 'form.submitOnChange')->name('form.submitOnChange');
    Route::view('form/background', 'form.background')->name('form.background');

    Route::view('form/confirm', 'form.confirm')->name('form.confirm');
    Route::view('form/confirmDanger', 'form.confirmDanger')->name('form.confirmDanger');
    Route::view('form/customConfirm', 'form.customConfirm')->name('form.customConfirm');
    Route::view('form/passwordConfirm', 'form.passwordConfirm')->name('form.passwordConfirm');
    Route::view('form/passwordConfirmOnce', 'form.passwordConfirmOnce')->name('form.passwordConfirmOnce');
    Route::view('form/dummyRequest', 'form.dummyRequest')->name('form.dummyRequest');
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

    Route::view('form/view', 'form.view')->name('form.view');
    Route::post('form/view', FormViewController::class)->name('form.view.submit');

    Route::view('form/nested', 'form.nested')->name('form.nested');
    Route::post('form/nested', NestedFormController::class)->name('form.nested.submit');

    Route::get('form/components/simple', [FormComponentsController::class, 'simple'])->name('form.components.simple');
    Route::get('form/components/vmodel', [FormComponentsController::class, 'vmodel'])->name('form.components.vmodel');
    Route::get('form/components/checkbox', [FormComponentsController::class, 'checkbox'])->name('form.components.checkbox');
    Route::get('form/components/checkboxes', [FormComponentsController::class, 'checkboxes'])->name('form.components.checkboxes');
    Route::post('form/components/checkboxes', [FormComponentsController::class, 'submitCheckboxes'])->name('form.components.submitCheckboxes');
    Route::get('form/components/radios', [FormComponentsController::class, 'radios'])->name('form.components.radios');
    Route::post('form/components/radios', [FormComponentsController::class, 'submitRadios'])->name('form.components.submitRadios');
    Route::get('form/components/libraries', [FormComponentsController::class, 'libraries'])->name('form.components.libraries');
    Route::get('form/components/libraryDefaults', [FormComponentsController::class, 'libraryDefaults'])->name('form.components.libraryDefaults');
    Route::get('form/components/libraryChange', [FormComponentsController::class, 'libraryChange'])->name('form.components.libraryChange');
    Route::get('form/components/librarySubmitOnChange', [FormComponentsController::class, 'librarySubmitOnChange'])->name('form.components.librarySubmitOnChange');
    Route::post('form/components/submitOnChange', [FormComponentsController::class, 'submitOnChange'])->name('form.components.submitOnChange');
    Route::get('form/components/custom', [FormComponentsController::class, 'custom'])->name('form.components.custom');
    Route::get('form/components/defaults', [FormComponentsController::class, 'defaults'])->name('form.components.defaults');
    Route::get('form/components/defaultJson', [FormComponentsController::class, 'defaultJson'])->name('form.components.defaultJson');
    Route::get('form/components/defaultPhp', [FormComponentsController::class, 'defaultPhp'])->name('form.components.defaultPhp');
    Route::get('form/components/arrays', [FormComponentsController::class, 'arrays'])->name('form.components.arrays');
    Route::get('form/components/eloquent', [FormComponentsController::class, 'eloquent'])->name('form.components.eloquent');
    Route::get('form/components/fluent', [FormComponentsController::class, 'fluent'])->name('form.components.fluent');
    Route::get('form/components/unguarded', [FormComponentsController::class, 'unguarded'])->name('form.components.unguarded');
    Route::get('form/components/defaultUnguarded', [FormComponentsController::class, 'defaultUnguarded'])->name('form.components.defaultUnguarded');
    Route::post('form/components', [FormComponentsController::class, 'submit'])->name('form.components.submit');
    Route::get('form/components/submitValue/{approved?}', [FormComponentsController::class, 'submitValue'])->name('form.components.submitValue');
    Route::post('form/components/submitValue/{approved?}', [FormComponentsController::class, 'submitValueSubmit'])->name('form.components.submitValueSubmit');
    Route::get('form/components/relation', [FormComponentsController::class, 'relation'])->name('form.components.relation');
    Route::get('form/components/transform', [FormComponentsController::class, 'transform'])->name('form.components.transform');
    Route::get('form/components/customSelectOptions', [FormComponentsController::class, 'customSelectOptions'])->name('form.components.customSelectOptions');

    Route::get('form/components/filepond', [FilepondController::class, 'show'])->name('form.components.filepond');
    Route::get('form/components/filepondValidation', [FilepondController::class, 'showValidation'])->name('form.components.filepondValidation');

    Route::get('form/components/filepondExisting', [FilepondController::class, 'showExisting'])->name('form.components.filepondExisting');
    Route::post('form/components/filepondExisting', [FilepondController::class, 'storeExisting'])->name('form.components.filepondStoreExisting');

    Route::post('form/components/storeSingle', [FilepondController::class, 'storeSingle'])->name('form.components.filepond.storeSingle');
    Route::post('form/components/storeMultiple', [FilepondController::class, 'storeMultiple'])->name('form.components.filepond.storeMultiple');

    Route::post('form/components/storeWithRouteMiddleware', [FilepondController::class, 'storeWithRouteMiddleware'])
        ->middleware(HandleSpladeFileUploads::for('avatar'))
        ->name('form.components.filepond.storeWithRouteMiddleware');

    Route::post('form/components/storeWithFormRequest', [FilepondController::class, 'storeWithFormRequest'])->name('form.components.filepond.storeWithFormRequest');
    Route::post('form/components/storeWithFormRequestRuleObject', [FilepondController::class, 'storeWithFormRequestRuleObject'])->name('form.components.filepond.storeWithFormRequestRuleObject');
    Route::post('form/components/storeWithFormRequestRuleObjectWithTitle/{project}', [FilepondController::class, 'storeWithFormRequestRuleObjectWithTitle'])->name('form.components.filepond.storeWithFormRequestRuleObjectWithTitle');

    Route::view('form/components/selectPlaceholder', 'form.components.selectPlaceholder')->name('form.components.selectPlaceholder');

    Route::view('form/components/selectAsync/keyValue', 'form.components.selectAsyncKeyValue')->name('form.components.selectAsyncKeyValue');
    Route::view('form/components/selectAsync/objects', 'form.components.selectAsyncObjects')->name('form.components.selectAsyncObjects');
    Route::view('form/components/selectAsync/dependent', 'form.components.selectAsyncDependent')->name('form.components.selectAsyncDependent');
    Route::view('form/components/selectAsync/nested', 'form.components.selectAsyncNested')->name('form.components.selectAsyncNested');
    Route::post('form/components/selectAsync', [FormComponentsController::class, 'selectAsync'])->name('form.components.selectAsync');

    Route::get('form/components/validateMessage', [FormComponentsController::class, 'showValidateMessage'])->name('form.components.showValidateMessage');
    Route::post('form/components/validateMessage', [FormComponentsController::class, 'storeValidateMessage'])->name('form.components.storeValidateMessage');

    Route::get('form/relations/belongsToMany', [FormRelationsController::class, 'belongsToMany'])->name('form.relations.belongsToMany');
    Route::get('form/relations/belongsToMany/choices', [FormRelationsController::class, 'belongsToManyChoices'])->name('form.relations.belongsToManyChoices');
    Route::post('form/relations/belongsToMany', [FormRelationsController::class, 'storeBelongsToMany'])->name('form.relations.storeBelongsToMany');
    Route::get('form/relations/morphToMany', [FormRelationsController::class, 'morphToMany'])->name('form.relations.morphToMany');
    Route::post('form/relations/morphToMany', [FormRelationsController::class, 'storeMorphToMany'])->name('form.relations.storeMorphToMany');
    Route::get('form/relations/checkboxRelation', [FormRelationsController::class, 'checkboxRelation'])->name('form.relations.checkboxRelation');
    Route::post('form/relations/checkboxRelation', [FormRelationsController::class, 'storeCheckboxRelation'])->name('form.relations.storeCheckboxRelation');

    Route::get('form/relations/twoForms', [FormRelationsController::class, 'twoForms'])->name('form.relations.twoForms');

    Route::get('formbuilder/simple', [FormBuilderController::class, 'simple'])->name('formbuilder.simple.index');
    Route::post('formbuilder/simple', [FormBuilderController::class, 'storeSimple'])->name('formbuilder.simple.store');

    Route::get('formbuilder/fromClass', [FormBuilderController::class, 'fromClass'])->name('formbuilder.fromClass.index');
    Route::post('formbuilder/fromClass', [FormBuilderController::class, 'storeFromClass'])->name('formbuilder.fromClass.store');

    Route::get('/formbuilder/modelBinding', [FormBuilderController::class, 'model'])->name('formbuilder.model.index');
    Route::post('/formbuilder/modelBinding', [FormBuilderController::class, 'storeModel'])->name('formbuilder.model.store');

    Route::get('/formbuilder/multifields', [FormBuilderController::class, 'multifields'])->name('formbuilder.multifields.index');
    Route::post('/formbuilder/multifields1', [FormBuilderController::class, 'storeMultifields1'])->name('formbuilder.multifields1.store');
    Route::post('/formbuilder/multifields2', [FormBuilderController::class, 'storeMultifields2'])->name('formbuilder.multifields2.store');

    Route::get('lazy', [LazyController::class, 'show'])->name('lazy');
    Route::get('lazy/nested', [LazyController::class, 'showNested'])->name('lazy.nested');
    Route::get('lazy/notifications', [LazyController::class, 'notifications'])->name('lazy.notifications');

    Route::get('navigation/one/{id?}', [NavigationController::class, 'one'])->name('navigation.one');
    Route::get('navigation/auth/one/{id?}', [NavigationController::class, 'one'])->name('navigation.one.auth')->middleware('auth');
    Route::get('navigation/two', [NavigationController::class, 'two'])->name('navigation.two');
    Route::get('navigation/three', [NavigationController::class, 'three'])->name('navigation.three');
    Route::get('navigation/form', [NavigationController::class, 'form'])->name('navigation.form');
    Route::get('navigation/video/one', [NavigationController::class, 'videoOne'])->name('navigation.videoOne');
    Route::get('navigation/video/two', [NavigationController::class, 'videoTwo'])->name('navigation.videoTwo');

    Route::get('navigation/redirectToTwo', fn () => redirect()->route('navigation.two'))->name('navigation.redirectToTwo');
    Route::get('navigation/away', fn () => redirect()->away('https://splade.dev/'))->name('navigation.away');
    Route::get('navigation/awayViaFacade', fn () => Splade::redirectAway('https://splade.dev/'))->name('navigation.awayViaFacade');
    Route::get('navigation/notFound', fn () => abort(404))->name('navigation.notFound');
    Route::get('navigation/serverError', fn () => throw new Exception('Whoops!'))->name('navigation.serverError');

    Route::post('navigation/post', [NavigationController::class, 'post'])->name('navigation.post');
    Route::put('navigation/put', [NavigationController::class, 'put'])->name('navigation.put');

    Route::get('modal/base', [ModalController::class, 'base'])->name('modal.base');
    Route::get('modal/one', [ModalController::class, 'one'])->name('modal.one');
    Route::get('modal/two', [ModalController::class, 'two'])->name('modal.two');
    Route::get('modal/opened', [ModalController::class, 'opened'])->name('modal.opened');
    Route::get('modal/slideover', [ModalController::class, 'slideover'])->name('modal.slideover');
    Route::get('modal/validation', [ModalController::class, 'validation'])->name('modal.validation');
    Route::get('modal/keep', [ModalController::class, 'keep'])->name('modal.keep');
    Route::get('modal/size/{size}', [ModalController::class, 'size'])->name('modal.size');

    Route::view('rehydrate/poll', 'rehydratePoll')->name('rehydratePoll');

    Route::get('rehydrate/twice', function (SpladeCore $splade) {
        if ($splade->isRehydrateRequest()) {
            sleep(2);
        }

        return view('rehydrateTwice');
    })->name('rehydrateTwice');

    Route::view('script', 'script')->name('script');
    Route::view('seoDirectives', 'seoDirectives')->name('seoDirectives');

    Route::post('state', function () {
        Splade::share('info', fn () => 'This is invalid');

        throw ValidationException::withMessages(['name' => 'Whoops!']);
    });

    Route::get('state', function () {
        session()->flash('message', 'This is a message');

        Splade::share('info', 'This is shared');

        return view('state');
    })->name('state');

    Route::view('teleport', 'teleport')->name('teleport');

    Route::get('toast/infoLeftTop', [ToastController::class, 'infoLeftTop'])->name('toast.infoLeftTop');
    Route::get('toast/infoCenterTop', [ToastController::class, 'infoCenterTop'])->name('toast.infoCenterTop');
    Route::get('toast/infoRightTop', [ToastController::class, 'infoRightTop'])->name('toast.infoRightTop');
    Route::get('toast/infoLeftCenter', [ToastController::class, 'infoLeftCenter'])->name('toast.infoLeftCenter');
    Route::get('toast/successCenter', [ToastController::class, 'successCenter'])->name('toast.successCenter');
    Route::get('toast/warningRightCenter', [ToastController::class, 'warningRightCenter'])->name('toast.warningRightCenter');
    Route::get('toast/dangerLeftBottom', [ToastController::class, 'dangerLeftBottom'])->name('toast.dangerLeftBottom');
    Route::get('toast/infoCenterBottom', [ToastController::class, 'infoCenterBottom'])->name('toast.infoCenterBottom');
    Route::get('toast/infoRightBottom', [ToastController::class, 'infoRightBottom'])->name('toast.infoRightBottom');
    Route::get('toast/twoLines', [ToastController::class, 'twoLines'])->name('toast.twoLines');

    Route::view('toggle/default', 'toggle.default')->name('toggle.default');
    Route::view('toggle/multipleDefaults', 'toggle.multipleDefaults')->name('toggle.multipleDefaults');
    Route::view('toggle/single', 'toggle.single')->name('toggle.single');
    Route::view('toggle/multiple', 'toggle.multiple')->name('toggle.multiple');

    Route::view('transition/default', 'transition.default')->name('transition.default');

    Route::view('preserveScroll/a', 'preserveScroll')->name('preserveScroll.a');
    Route::view('preserveScroll/b', 'preserveScroll')->name('preserveScroll.b');

    Route::prefix('table')->group(function () {
        $table = new UserTableView;

        Route::get('/modal', [TableController::class, 'modal'])->name('table.modal');

        Route::get('/as/{spladeQueryBuilder?}', [TableController::class, 'as'])->name('table.as');
        Route::get('/boolean/{spladeQueryBuilder?}', [TableController::class, 'boolean'])->name('table.boolean');
        Route::get('/custom/{spladeQueryBuilder?}', [TableController::class, 'custom'])->name('table.custom');
        Route::get('/noPerPage/{spladeQueryBuilder?}', [TableController::class, 'noPerPage'])->name('table.noPerPage');
        Route::get('/overflow/{spladeQueryBuilder?}', [TableController::class, 'overflow'])->name('table.overflow');
        Route::get('/rowLink/{spladeQueryBuilder?}', [TableController::class, 'rowLink'])->name('table.rowLink');
        Route::get('/rowModal/{spladeQueryBuilder?}', [TableController::class, 'rowModal'])->name('table.rowModal');
        Route::get('/rowSlideover/{spladeQueryBuilder?}', [TableController::class, 'rowSlideover'])->name('table.rowSlideover');
        Route::get('/caseSensitive/{spladeQueryBuilder?}', [TableController::class, 'caseSensitive'])->name('table.caseSensitive');
        Route::get('/caseInsensitive/{spladeQueryBuilder?}', [TableController::class, 'caseInsensitive'])->name('table.caseInsensitive');

        Route::get('/empty', [TableController::class, 'empty'])->name('table.empty');

        Route::get('/preserveScrollForm', [TableController::class, 'preserveScrollForm'])->name('table.preserveScrollForm');
        Route::post('/preserveScrollForm', [TableController::class, 'preserveScrollFormSubmit'])->name('table.preserveScrollFormSubmit');

        Route::get('/relationsAndExports/{spatieQueryBuilder?}', [TableController::class, 'relationsAndExports'])->name('table.relationsAndExports');

        // @todo refactor into matrix
        Route::get('/users/spatie', fn () => $table->spatie(paginateMethod: 'paginate'));
        Route::get('/users/spatie/simple', fn () => $table->spatie(paginateMethod: 'simplePaginate'));
        Route::get('/users/spatie/cursor', fn () => $table->spatie(paginateMethod: 'cursorPaginate'));

        Route::get('/users/spatieWrapped', fn () => $table->spatieWrapped(paginateMethod: 'paginate'));
        Route::get('/users/spatieWrapped/simple', fn () => $table->spatieWrapped(paginateMethod: 'simplePaginate'));
        Route::get('/users/spatieWrapped/cursor', fn () => $table->spatieWrapped(paginateMethod: 'cursorPaginate'));

        Route::get('/users/splade', fn () => $table->splade(paginateMethod: 'paginate'));
        Route::get('/users/splade/simple', fn () => $table->splade(paginateMethod: 'simplePaginate'));
        Route::get('/users/splade/cursor', fn () => $table->splade(paginateMethod: 'cursorPaginate'));

        Route::get('/users/spladeWrapped', fn () => $table->spladeWrapped(paginateMethod: 'paginate'));
        Route::get('/users/spladeWrapped/simple', fn () => $table->spladeWrapped(paginateMethod: 'simplePaginate'));
        Route::get('/users/spladeWrapped/cursor', fn () => $table->spladeWrapped(paginateMethod: 'cursorPaginate'));
    });
});
