<?php

namespace ProtoneMedia\Splade;

use Illuminate\Http\Request;
use ProtoneMedia\Splade\Table\BulkAction;
use ProtoneMedia\Splade\Table\Export;

abstract class AbstractTable
{
    /**
     * The SpladeTable instance.
     *
     * @var \ProtoneMedia\Splade\SpladeTable|null
     */
    private ?SpladeTable $table = null;

    /**
     * Determine if the user is authorized to perform bulk actions and exports.
     *
     * @return bool
     */
    public function authorize(Request $request)
    {
        return true;
    }

    /**
     * The resource or query builder.
     *
     * @return mixed
     */
    public function for()
    {
        return [];
    }

    /**
     * Helper method to create a new SpladeTable instance.
     *
     * @return \ProtoneMedia\Splade\SpladeTable
     */
    public static function build(...$arguments): SpladeTable
    {
        $table = new static(...$arguments);

        return $table->make()->beforeRender();
    }

    /**
     * Creates a new SpladeTable instance with the resource or
     * query builder from the 'for()' method of this class.
     *
     * @return \ProtoneMedia\Splade\SpladeTable
     */
    public function make(): SpladeTable
    {
        if ($this->table) {
            return $this->table;
        }

        return $this->table = tap(
            SpladeTable::for($this->for()),
            function (SpladeTable $table) {
                $table->setConfigurator($this);
                $this->configure($table);
            }
        );
    }

    /**
     * Configure the given SpladeTable.
     *
     * @param  \ProtoneMedia\Splade\SpladeTable  $table
     * @return void
     */
    public function configure(SpladeTable $table)
    {
        //
    }

    /**
     * Returns a TableExporter instance.
     *
     * @return \ProtoneMedia\Splade\TableExporter|null
     */
    public function makeExporter(int $key): ?TableExporter
    {
        $table = $this->make();

        if (!$table instanceof SpladeQueryBuilder) {
            return null;
        }

        /** @var Export $export */
        $export = $table->getExports()[$key];

        return new TableExporter(
            $table,
            $export->filename,
            $export->type,
            $export->events
        );
    }

    /**
     * Performs the bulk action on the given ids.
     *
     * @return void
     */
    public function performBulkAction(int $key, array $ids)
    {
        $table = $this->make();

        if ($table instanceof SpladeQueryBuilder) {
            /** @var BulkAction $bulkAction */
            $bulkAction = $table->getBulkActions()[$key];

            call_user_func($bulkAction->beforeCallback, $ids);

            $table->performBulkAction($bulkAction->eachCallback, $ids);

            call_user_func($bulkAction->afterCallback, $ids);
        }
    }
}
