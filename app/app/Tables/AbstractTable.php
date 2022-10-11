<?php

namespace App\Tables;

use ProtoneMedia\Splade\QueryBuilder;
use ProtoneMedia\Splade\SpladeTable;

abstract class AbstractTable
{
    public function make(): SpladeTable
    {
        $table = SpladeTable::for($this->for());

        $this->configure($table);

        return $table;
    }

    public function for()
    {
        return [];
    }

    public function configure(SpladeTable $table)
    {
        //
    }

    public function performAction(int $action, array $ids)
    {
        /** @var QueryBuilder $table */
        $table = $this->make();

        $action = $table->getActions()[$action];

        $table->performAction($action['callable'], $ids);
    }
}
