<?php

namespace Tests\Unit;

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
}
