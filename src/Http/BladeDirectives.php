<?php

namespace ProtoneMedia\Splade\Http;

use Illuminate\Support\Facades\Blade;

class BladeDirectives
{
    public function registerHandlers()
    {
        Blade::directive('splade', [$this, 'splade']);
        Blade::directive('spladeHead', [$this, 'spladeHead']);

        $this->registerTableCellDirective();
    }

    public function splade($expression = '')
    {
        $id = trim(trim($expression), "\'\"") ?: 'app';

        $template[] = '<div id="' . $id . '" data-components="{{ json_encode($components) }}" data-html="{{ json_encode($html) }}" data-splade="{{ json_encode($splade) }}">';
        $template[] = '{!! $ssrBody !!}';
        $template[] = '</div>';

        return implode(PHP_EOL, $template);
    }

    public function spladeHead()
    {
        return '{{ app(\'laravel-splade-seo\')->renderHead() }}';
    }

    public function registerTableCellDirective()
    {
        $cellDirectiveName = config('splade.blade.table_cell_directive');

        Blade::directive($cellDirectiveName, function ($expression) {
            preg_match("/('|\")(\w+)('|\")(,)(\s*)(.*)/", $expression, $matches);

            $name = trim($matches[2]);

            $arguments = trim($matches[6], '\[\]');

            $splitted = preg_split('/\],(\s*)/', $arguments);

            $slotArguments = trim($splitted[0]       ?? '');
            $slotUses      = trim(ltrim($splitted[1] ?? '', '['));

            $function = "function ({$slotArguments})";

            if ($slotUses) {
                $function .= " use ({$slotUses})";
            }

            return "<?php \$__env->slot('spladeTableCell{$name}', {$function} { ?>";
        });

        Blade::directive('end' . $cellDirectiveName, function () {
            return '<?php }); ?>';
        });
    }
}
