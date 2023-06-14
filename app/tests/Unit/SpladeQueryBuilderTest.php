<?php

namespace Tests\Unit;

use App\Models\Address;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Facades\DB;
use ProtoneMedia\Splade\SpladeQueryBuilder;
use ProtoneMedia\Splade\SpladeTable;
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

    /** @test */
    public function it_can_apply_sorting_with_a_closure()
    {
        $table = SpladeTable::for(Address::class)
            ->column('two_columns', sortable: function ($builder, $direction) {
                $builder->orderBy('address', $direction)
                    ->orderBy('city', $direction);
            })
            ->defaultSort('two_columns');

        DB::enableQueryLog();
        $table->beforeRender();
        DB::disableQueryLog();
        $log = DB::getQueryLog();

        $this->assertCount(1, $log);
        $this->assertEquals('select * from "addresses" order by "address" asc, "city" asc', $log[0]['query']);
    }
}
