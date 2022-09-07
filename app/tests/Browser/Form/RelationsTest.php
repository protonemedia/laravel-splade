<?php

namespace Tests\Browser\Form;

use App\Models\Keyword;
use App\Models\Tag;
use App\Models\User;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class RelationsTest extends DuskTestCase
{
    /** @test */
    public function it_can_handle_a_belongs_to_many_relationship()
    {
        $tags = Tag::query()->get();

        $user = User::first();

        $user->tags()->sync($tags->take(3));

        $newIds = [$tags->get(0)->id, $tags->get(7)->id, $tags->get(8)->id, $tags->get(9)->id];

        $this->browse(function (Browser $browser) use ($tags, $newIds) {
            $browser->visit('form/relations/belongsToMany')
                ->waitForText('FormComponents')
                ->assertSelected('tags[]', $tags->get(0)->id)
                ->assertSelected('tags[]', $tags->get(1)->id)
                ->assertSelected('tags[]', $tags->get(2)->id)
                ->assertNotSelected('tags[]', $tags->get(3)->id)
                ->assertNotSelected('tags[]', $tags->get(9)->id)
                ->select('tags[]', $newIds)
                ->press('Submit')
                ->waitUntilMissingText('FormComponents')
                ->waitForRoute('navigation.one');
        });

        $this->assertEquals($newIds, $user->tags()->get()->map->id->all());
    }

    /** @test */
    public function it_can_handle_a_morph_to_many_relationship()
    {
        $keywords = Keyword::query()->get();

        $user = User::first();

        $user->keywords()->sync($keywords->take(3));

        $newIds = [$keywords->get(0)->id, $keywords->get(7)->id, $keywords->get(8)->id, $keywords->get(9)->id];

        $this->browse(function (Browser $browser) use ($keywords, $newIds) {
            $browser->visit('form/relations/morphToMany')
                ->waitForText('FormComponents')
                ->assertSelected('keywords[]', $keywords->get(0)->id)
                ->assertSelected('keywords[]', $keywords->get(1)->id)
                ->assertSelected('keywords[]', $keywords->get(2)->id)
                ->assertNotSelected('keywords[]', $keywords->get(3)->id)
                ->assertNotSelected('keywords[]', $keywords->get(9)->id)
                ->select('keywords[]', $newIds)
                ->press('Submit')
                ->waitUntilMissingText('FormComponents')
                ->waitForRoute('navigation.one');
        });

        $this->assertEquals($newIds, $user->keywords()->get()->map->id->all());
    }

    /** @test */
    public function it_can_handle_a_relationship_with_checkboxes()
    {
        $keywords = Keyword::query()->get();

        $user = User::first();

        $user->keywords()->sync($keywords->take(3));

        $newIds = [$keywords->get(0)->id, $keywords->get(7)->id, $keywords->get(8)->id, $keywords->get(9)->id];

        $this->browse(function (Browser $browser) use ($keywords, $newIds) {
            $browser->visit('form/relations/checkboxRelation')
                ->waitForText('FormComponents')
                ->assertChecked('keywords[]', $keywords->get(0)->id)
                ->assertChecked('keywords[]', $keywords->get(1)->id)
                ->assertChecked('keywords[]', $keywords->get(2)->id)
                ->assertNotChecked('keywords[]', $keywords->get(3)->id)
                ->assertNotChecked('keywords[]', $keywords->get(9)->id)
                ->uncheck('keywords[]', $keywords->get(1)->id)
                ->uncheck('keywords[]', $keywords->get(2)->id)
                ->check('keywords[]', $keywords->get(7)->id)
                ->check('keywords[]', $keywords->get(8)->id)
                ->check('keywords[]', $keywords->get(9)->id)
                ->press('Submit')
                ->waitUntilMissingText('FormComponents')
                ->waitForRoute('navigation.one');
        });

        $this->assertEquals($newIds, $user->keywords()->get()->map->id->all());
    }

    /** @test */
    public function it_can_have_two_forms_in_a_view_without_mixing_data()
    {
        $tags = Tag::query()->get();

        $firstUser  = User::skip(0)->first();
        $secondUser = User::skip(1)->first();

        $firstUser->tags()->sync($tags->take(3));
        $secondUser->tags()->sync($tags->skip(3)->take(3));

        $this->browse(function (Browser $browser) use ($tags) {
            $browser->visit('form/relations/twoForms')
                ->waitForText('FormComponents')
                ->within('#form1', function (Browser $browser) use ($tags) {
                    $browser
                        ->assertSeeIn('#all1', 'name')
                        ->assertDontSeeIn('#all1', 'email')
                        ->assertSelected('tags[]', $tags->get(0)->id)
                        ->assertSelected('tags[]', $tags->get(1)->id)
                        ->assertSelected('tags[]', $tags->get(2)->id)
                        ->assertNotSelected('tags[]', $tags->get(3)->id)
                        ->assertNotSelected('tags[]', $tags->get(4)->id)
                        ->assertNotSelected('tags[]', $tags->get(5)->id);
                })
                ->within('#form2', function (Browser $browser) use ($tags) {
                    $browser
                        ->assertDontSeeIn('#all2', 'name')
                        ->assertSeeIn('#all2', 'email')
                        ->assertNotSelected('tags[]', $tags->get(0)->id)
                        ->assertNotSelected('tags[]', $tags->get(1)->id)
                        ->assertNotSelected('tags[]', $tags->get(2)->id)
                        ->assertSelected('tags[]', $tags->get(3)->id)
                        ->assertSelected('tags[]', $tags->get(4)->id)
                        ->assertSelected('tags[]', $tags->get(5)->id);
                });
        });
    }
}
