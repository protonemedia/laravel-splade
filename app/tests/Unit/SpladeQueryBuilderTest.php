<?php

namespace Tests\Unit;

use Illuminate\Database\Query\Builder;
use ProtoneMedia\Splade\SpladeQueryBuilder;
use Tests\TestCase;

class SpladeQueryBuilderTest extends TestCase
{
    /** @test */
    public function it_can_parse_terms()
    {
        $builder = new SpladeQueryBuilder($this->mock(Builder::class));

        $this->assertEquals(['foo'], $builder->parseTermsIntoCollection('foo')->all());
        $this->assertEquals(['foo', 'bar'], $builder->parseTermsIntoCollection('foo bar')->all());
        $this->assertEquals(['foo bar'], $builder->parseTermsIntoCollection('"foo bar"')->all());
        $this->assertEquals(['baz', 'foo bar'], $builder->parseTermsIntoCollection('baz "foo bar"')->all());
        $this->assertEquals(['foo bar', 'baz'], $builder->parseTermsIntoCollection('"foo bar" baz')->all());
        $this->assertEquals(['0'], $builder->parseTermsIntoCollection('0')->all());
        $this->assertEquals(['1'], $builder->parseTermsIntoCollection('1')->all());
    }
}
