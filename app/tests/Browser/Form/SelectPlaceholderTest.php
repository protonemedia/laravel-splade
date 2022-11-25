<?php

namespace Tests\Browser\Form;

use Facebook\WebDriver\Remote\RemoteWebElement;
use Facebook\WebDriver\WebDriverBy;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class SelectPlaceholderTest extends DuskTestCase
{
    /** @test */
    public function it_can_have_no_placeholder_on_regular_select_elements()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/selectPlaceholder')
                ->waitForText('FormComponents')
                ->assertSelectMissingOption('@regular-no-placeholder', '')
                ->assertSelectMissingOption('@multiple-regular-no-placeholder', '');
        });
    }

    /** @test */
    public function it_can_have_a_placeholder_on_regular_select_elements_but_you_cant_select_it()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/selectPlaceholder')
                ->waitForText('FormComponents')
                ->assertSelectHasOption('@regular-with-placeholder', '')
                ->assertSelectHasOption('@multiple-regular-with-placeholder', '');

            foreach (['@regular-with-placeholder', '@multiple-regular-with-placeholder'] as $duskSelector) {
                $element = $browser->resolver->resolveForSelection($duskSelector);

                /** @var RemoteWebElement $option */
                $option = $element->findElements(WebDriverBy::cssSelector('option[disabled]'))[0] ?? null;

                $this->assertNotNull($option);
                $this->assertEquals('', $option->getAttribute('value'));
            }
        });
    }

    /** @test */
    public function it_can_have_no_placeholder_on_choices_instances()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/selectPlaceholder')
                ->waitForText('FormComponents')
                ->within('@choices-no-placeholder-listbox', function (Browser $browser) {
                    // Non-multiple Choices.js instances have a dummy placeholder,
                    // otherwise the first option would be selected by default.
                    $browser->assertPresent('div.choices__item.choices__placeholder.is-selected[data-value=""]');
                })
                ->within('@multiple-choices-no-placeholder-listbox', function (Browser $browser) {
                    $browser->assertMissing('div.choices__item.choices__placeholder');
                });

            // Select the first option in the non-multiple Choices.js instance,
            // and then reset it to the placeholder.
            $browser->choicesSelect('@choices-no-placeholder', 'NL')
                ->choicesRemoveItem('@choices-no-placeholder')
                ->within('@choices-no-placeholder-listbox', function (Browser $browser) {
                    $browser->assertPresent('div.choices__item.choices__placeholder.is-selected[data-value=""]');
                });

            // Select the first option in the multiple Choices.js instance,
            // and then remove it and see no children in the box.
            $browser->choicesSelect('@multiple-choices-no-placeholder', 'NL')
                ->within('@multiple-choices-no-placeholder', function (Browser $browser) {
                    $children = $browser->script('return document.querySelector(\'[dusk="multiple-choices-no-placeholder"] div.choices__list.choices__list--multiple\').childNodes.length')[0] ?? null;
                    $this->assertEquals(1, $children);
                })
                ->choicesRemoveItem('@multiple-choices-no-placeholder')
                ->within('@multiple-choices-no-placeholder', function (Browser $browser) {
                    $children = $browser->script('return document.querySelector(\'[dusk="multiple-choices-no-placeholder"] div.choices__list.choices__list--multiple\').childNodes.length')[0] ?? null;
                    $this->assertEquals(0, $children);
                });
        });
    }

    /** @test */
    public function it_can_have_a_placeholder_on_choices_instances()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('form/components/selectPlaceholder')
                ->waitForText('FormComponents')
                ->within('@choices-with-placeholder-listbox', function (Browser $browser) {
                    $browser->assertPresent('div.choices__item.choices__placeholder.is-selected[data-value=""]');
                })
                ->within('@choices-with-placeholder', function (Browser $browser) {
                    $browser->assertSeeIn('div.choices__item.choices__placeholder', 'Country');
                })
                ->within('@multiple-choices-with-placeholder', function (Browser $browser) {
                    $browser->assertPresent('input.choices__input[placeholder="Country"]');
                });

            // Select the first option in the non-multiple Choices.js instance,
            // and then reset it to the placeholder.
            $browser->choicesSelect('@choices-with-placeholder', 'NL')
                ->choicesRemoveItem('@choices-with-placeholder')
                ->within('@choices-with-placeholder-listbox', function (Browser $browser) {
                    $browser->assertPresent('div.choices__item.choices__placeholder.is-selected[data-value=""]');
                });

            // Select the first option in the multiple Choices.js instance,
            // and then remove it and see no children in the box.
            $browser->choicesSelect('@multiple-choices-with-placeholder', 'NL')
                ->within('@multiple-choices-with-placeholder', function (Browser $browser) {
                    $children = $browser->script('return document.querySelector(\'[dusk="multiple-choices-with-placeholder"] div.choices__list.choices__list--multiple\').childNodes.length')[0] ?? null;
                    $this->assertEquals(1, $children);
                })
                ->choicesRemoveItem('@multiple-choices-with-placeholder')
                ->within('@multiple-choices-with-placeholder', function (Browser $browser) {
                    $browser->assertPresent('input.choices__input[placeholder="Country"]');

                    $children = $browser->script('return document.querySelector(\'[dusk="multiple-choices-with-placeholder"] div.choices__list.choices__list--multiple\').childNodes.length')[0] ?? null;
                    $this->assertEquals(0, $children);
                });
        });
    }
}
