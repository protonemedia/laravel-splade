<?php

namespace Tests\Unit;

use ProtoneMedia\Splade\Head;
use Tests\TestCase;

class HeadTest extends TestCase
{
    /** @test */
    public function it_trims_the_title()
    {
        $head = new Head;
        $head->title(' Laravel Splade ');

        $this->assertEquals('Laravel Splade', $head->getTitle());
    }

    /** @test */
    public function it_prepends_the_prefix()
    {
        config(['splade.seo.title_prefix' => 'Prefix']);

        $head = (new Head)->title('Laravel Splade');
        $this->assertEquals('Prefix Laravel Splade', $head->getTitle());

        config(['splade.seo.title_prefix' => 'Prefix']);
        config(['splade.seo.title_separator' => '|']);

        $head = (new Head)->title('Laravel Splade');
        $this->assertEquals('Prefix | Laravel Splade', $head->getTitle());
    }

    /** @test */
    public function it_doesnt_prepend_the_prefix_if_its_the_same_as_the_title()
    {
        config(['splade.seo.title_prefix' => 'Laravel Splade']);

        $head = (new Head)->title('Laravel Splade');
        $this->assertEquals('Laravel Splade', $head->getTitle());

        config(['splade.seo.title_prefix' => 'Laravel Splade']);
        config(['splade.seo.title_separator' => '|']);

        $head = (new Head)->title('Laravel Splade');

        $this->assertEquals('Laravel Splade', $head->getTitle());
    }

    /** @test */
    public function it_appends_the_prefix()
    {
        config(['splade.seo.title_suffix' => 'Suffix']);

        $head = (new Head)->title('Laravel Splade');
        $this->assertEquals('Laravel Splade Suffix', $head->getTitle());

        config(['splade.seo.title_suffix' => 'Suffix']);
        config(['splade.seo.title_separator' => '|']);

        $head = (new Head)->title('Laravel Splade');
        $this->assertEquals('Laravel Splade | Suffix', $head->getTitle());
    }

    /** @test */
    public function it_doesnt_append_the_suffix_if_its_the_same_as_the_title()
    {
        config(['splade.seo.title_suffix' => 'Laravel Splade']);

        $head = (new Head)->title('Laravel Splade');
        $this->assertEquals('Laravel Splade', $head->getTitle());

        config(['splade.seo.title_suffix' => 'Laravel Splade']);
        config(['splade.seo.title_separator' => '|']);

        $head = (new Head)->title('Laravel Splade');

        $this->assertEquals('Laravel Splade', $head->getTitle());
    }

    /** @test */
    public function it_can_fill_the_twitter_defaults_and_then_auto_fills()
    {
        config([
            'splade.seo.twitter.auto_fill'   => true,
            'splade.seo.twitter.card'        => 'summary_large_image',
            'splade.seo.twitter.site'        => '@username',
            'splade.seo.twitter.title'       => 'Default Title',
            'splade.seo.twitter.description' => 'Default Description',
            'splade.seo.twitter.image'       => 'http://image',
        ]);

        $head = new Head;

        $this->assertEquals($head->getMetaByName('twitter:card')->content, 'summary_large_image');
        $this->assertEquals($head->getMetaByName('twitter:site')->content, '@username');
        $this->assertEquals($head->getMetaByName('twitter:title')->content, 'Default Title');
        $this->assertEquals($head->getMetaByName('twitter:description')->content, 'Default Description');
        $this->assertEquals($head->getMetaByName('twitter:image')->content, 'http://image');

        $head->title('Updated Title');
        $head->description('Updated Description');

        $this->assertEquals($head->getMetaByName('twitter:title')->content, 'Updated Title');
        $this->assertEquals($head->getMetaByName('twitter:description')->content, 'Updated Description');
    }

    /** @test */
    public function it_can_fill_the_open_graph_defaults_and_then_auto_fills()
    {
        config([
            'splade.seo.open_graph.auto_fill' => true,
            'splade.seo.open_graph.type'      => 'WebPage',
            'splade.seo.open_graph.site_name' => 'Default Site Name',
            'splade.seo.open_graph.title'     => 'Default Title',
            'splade.seo.open_graph.url'       => 'http://url',
            'splade.seo.open_graph.image'     => 'http://image',
        ]);

        $head = new Head;

        $this->assertEquals($head->getMetaByProperty('og:type')->content, 'WebPage');
        $this->assertEquals($head->getMetaByProperty('og:site_name')->content, 'Default Site Name');
        $this->assertEquals($head->getMetaByProperty('og:title')->content, 'Default Title');
        $this->assertEquals($head->getMetaByProperty('og:url')->content, 'http://url');
        $this->assertEquals($head->getMetaByProperty('og:image')->content, 'http://image');

        $head->title('Updated Title');

        $this->assertEquals($head->getMetaByProperty('og:title')->content, 'Updated Title');
    }

    /** @test */
    public function it_can_render_the_canonical_link()
    {
        $head = new Head;
        $head->canonical('https://splade.dev');

        $this->assertStringContainsString('<link rel="canonical" href="https://splade.dev">', $head->renderHead()->toHtml());
    }
}
