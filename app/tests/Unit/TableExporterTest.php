<?php

namespace Tests\Unit;

use App\Models\User;
use Illuminate\Support\Carbon;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Excel;
use Mockery;
use Mockery\MockInterface;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use PhpOffice\PhpSpreadsheet\Style\Style;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use ProtoneMedia\Splade\SpladeQueryBuilder;
use ProtoneMedia\Splade\TableExporter;
use Tests\TestCase;

class TableExporterTest extends TestCase
{
    private function exporter()
    {
        $table = SpladeQueryBuilder::for(User::class)
            ->column('id', exportAs: fn ($value) => "custom-{$value}")
            ->column('name', exportAs: false)
            ->column('created_at', exportFormat: NumberFormat::FORMAT_DATE_TIME1, exportStyling: ['font' => ['bold' => true]])
            ->column('updated_at', exportFormat: fn () => NumberFormat::FORMAT_DATE_TIME2, exportStyling: function (Style $style) {
                $style->getFont()->setBold(true);
            });

        return new TableExporter(
            $table,
            'users.xlsx',
            Excel::XLSX,
            [AfterSheet::class => fn () => null]
        );
    }

    /** @test */
    public function it_can_generate_an_array_with_the_headings()
    {
        $this->assertEquals(['Id', 'Created At', 'Updated At'], $this->exporter()->headings());
    }

    /** @test */
    public function it_can_generate_an_array_with_the_column_formatting()
    {
        $this->assertEquals([
            'B' => NumberFormat::FORMAT_DATE_TIME1,
            'C' => NumberFormat::FORMAT_DATE_TIME2,
        ], $this->exporter()->columnFormats());
    }

    /** @test */
    public function it_can_generate_an_array_with_the_column_styling_or_use_a_callback()
    {
        /** @var MockInterface $worksheet */
        $worksheet = Mockery::mock(Worksheet::class);
        $worksheet->shouldReceive('getHighestRowAndColumn')->andReturn(['column' => 'C', 'row' => 3]);
        $worksheet->shouldReceive('setAutoFilter')->with('A1:C1');
        $worksheet->shouldReceive('getStyle')->with('C2:C3')->andReturn($style = new Style());

        $this->assertEquals([
            'B2:B3' => ['font' => ['bold' => true]],
        ], $this->exporter()->styles($worksheet));

        $this->assertTrue($style->getFont()->getBold());
    }

    /** @test */
    public function it_can_map_an_item()
    {
        Carbon::setTestNow(now());

        $row = $this->exporter()->map([
            'id'         => 1337,
            'name'       => 'Laravel Splade',
            'created_at' => now()->subMonth(),
            'updated_at' => now(),
        ]);

        $this->assertArrayNotHasKey('name', $row);
        $this->assertEquals('custom-1337', $row[0]);
        $this->assertEquals(now()->subMonth(), $row[1]);
        $this->assertEquals(now(), $row[2]);
    }

    /** @test */
    public function it_can_return_the_event_callbacks()
    {
        $events = $this->exporter()->registerEvents();

        $this->assertArrayHasKey(AfterSheet::class, $events);
    }
}
