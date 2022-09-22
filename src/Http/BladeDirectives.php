<?php

namespace ProtoneMedia\Splade\Http;

use Illuminate\Support\Facades\Blade;
use ProtoneMedia\Splade\Facades\Splade;

class BladeDirectives
{
    public function registerHandlers()
    {
        Blade::directive('splade', [$this, 'splade']);
        Blade::directive('spladeHead', [$this, 'spladeHead']);
        Blade::directive('lazy', [$this, 'lazy']);
        Blade::directive('endlazy', [$this, 'endlazy']);

        $this->registerTableCellDirective();
    }

    public function splade($expression = '')
    {
        $id = trim(trim($expression), "\'\"") ?: 'app';

        $template[] = '<div id="' . $id . '" data-components="{{ json_encode($components) }}" data-html="{{ json_encode($html) }}" data-dynamics="{{ json_encode($dynamics) }}" data-splade="{{ json_encode($splade) }}">';
        $template[] = '{!! $ssrBody !!}';
        $template[] = '</div>';

        return implode(PHP_EOL, $template);
    }

    public function spladeHead()
    {
        return '{{ app(\'laravel-splade-seo\')->renderHead() }}';
    }

    public function lazy()
    {
        if (Splade::isLazyRequest()) {
            return  '<?php if(true): ?>';
        }

        return  '<?php if(false): ?>';
    }

    public function endlazy()
    {
        if (Splade::isLazyRequest()) {
            return '<?php endif; ?>';
        }

        return '<?php endif; ?>';
    }

    public static function parseTableCellDirectiveExpression($expression): array
    {
        preg_match("/('|\")(\w+)('|\")(,)(\s*)(.*)/", $expression, $matches);

        $name = trim($matches[2]);

        $arguments = trim($matches[6], '\[\]');

        $splitted = preg_split('/\],(\s*)/', $arguments);

        $slotArguments = trim($splitted[0] ?? '');
        $slotUses      = trim(ltrim($splitted[1] ?? '', '['));

        $slotUses = $slotUses ? "\$__env, {$slotUses}" : '$__env';

        $function = "function ({$slotArguments})";
        $function .= " use ({$slotUses})";

        return [$name, $function];
    }

    public function registerTableCellDirective()
    {
        $cellDirectiveName = config('splade.blade.table_cell_directive');

        Blade::directive($cellDirectiveName, function ($expression) {
            [$name, $function] = BladeDirectives::parseTableCellDirectiveExpression($expression);

            return "<?php \$__env->slot('spladeTableCell{$name}', {$function} { ?>";
        });

        Blade::directive('end' . $cellDirectiveName, function () {
            return '<?php }); ?>';
        });
    }
}
