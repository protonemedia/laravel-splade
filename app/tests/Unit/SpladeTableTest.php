<?php

namespace Tests\Unit;

use Illuminate\Pagination\LengthAwarePaginator;
use ProtoneMedia\Splade\AbstractTable;
use ProtoneMedia\Splade\PaginationException;
use ProtoneMedia\Splade\SpladeTable;
use Tests\TestCase;

class SpladeTableTest extends TestCase
{
    /** @test */
    public function it_can_use_a_default_sort_key()
    {
        $table = new SpladeTable([]);

        $this->assertEquals('name', $table->defaultSort('name')->getDefaultSort());
        $this->assertEquals('-name', $table->defaultSort('-name')->getDefaultSort());

        $this->assertEquals('name', $table->defaultSort('name', 'asc')->getDefaultSort());
        $this->assertEquals('name', $table->defaultSort('-name', 'asc')->getDefaultSort());

        $this->assertEquals('-name', $table->defaultSort('name', 'desc')->getDefaultSort());
        $this->assertEquals('-name', $table->defaultSort('-name', 'desc')->getDefaultSort());

        $this->assertEquals('-name', $table->defaultSortDesc('name')->getDefaultSort());
        $this->assertEquals('-name', $table->defaultSortDesc('-name')->getDefaultSort());
    }

    /** @test */
    public function it_prevents_double_pagination()
    {
        $table = new class extends AbstractTable {
            public function for()
            {
                return new LengthAwarePaginator([], 100, 10, 1);
            }

            public function configure(SpladeTable $table)
            {
                $table->paginate(10);
            }
        };

        try {
            $table->make();
        } catch (PaginationException $e) {
            return $this->assertTrue(true);
        }

        $this->fail('The pagination exception was not thrown.');
    }
}
