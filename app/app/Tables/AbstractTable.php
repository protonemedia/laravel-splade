<?php

namespace App\Tables;

use ProtoneMedia\Splade\QueryBuilder;
use ProtoneMedia\Splade\SpladeTable;
use ProtoneMedia\Splade\Table\BulkAction;
use ProtoneMedia\Splade\Table\Export;
use ProtoneMedia\Splade\TableExport;

abstract class AbstractTable
{
    public function make(): SpladeTable
    {
        $table = SpladeTable::for($this->for())->setConfigurator($this);

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

    public function makeExport(int $key)
    {
        $table = $this->make();

        if ($table instanceof QueryBuilder) {
            /** @var Export $export */
            $export = $table->getExports()[$key];

            return new TableExport(
                $this->make(),
                $export->filename,
                $export->type
            );
        }
    }

    public function performBulkAction(int $key, array $ids)
    {
        $table = $this->make();

        if ($table instanceof QueryBuilder) {
            /** @var BulkAction $bulkAction */
            $bulkAction = $table->getBulkActions()[$key];

            call_user_func($bulkAction->beforeCallback, $ids);

            $table->performBulkAction($bulkAction->eachCallback, $ids);

            call_user_func($bulkAction->afterCallback, $ids);
        }
    }
}
