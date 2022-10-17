<?php

namespace ProtoneMedia\Splade\Http;

use Illuminate\Support\Facades\Blade;

class BladeDirectives
{
    /**
     * Registers the Blade @splade, @spladeHead, and @cell directives.
     *
     * @return void
     */
    public function registerHandlers()
    {
        Blade::directive('splade', [$this, 'splade']);
        Blade::directive('spladeHead', [$this, 'spladeHead']);
        Blade::directive('preserveScroll', [$this, 'preserveScroll']);

        $this->registerTableCellDirective();
    }

    /**
     * Returns a template with the main app element and all required Splade attributes.
     *
     * @param  string  $expression
     * @return string
     */
    public function splade($expression = ''): string
    {
        $id = trim(trim($expression), "\'\"") ?: 'app';

        $template[] = '<div id="' . $id . '" data-components="{{ json_encode($components) }}" data-html="{{ json_encode($html) }}" data-dynamics="{{ json_encode($dynamics) }}" data-splade="{{ json_encode($splade) }}">';
        $template[] = '{!! $ssrBody !!}';
        $template[] = '</div>';

        return implode(PHP_EOL, $template);
    }

    /**
     * Returns a template that eventually renders the Splade SEO Head.
     *
     * @return string
     */
    public function spladeHead(): string
    {
        return '{{ app(\'laravel-splade-seo\')->renderHead() }}';
    }

    /**
     * Returns a Vue directive to preserve the scroll props of the element.
     *
     * @return string
     */
    public function preserveScroll($expression): string
    {
        $key = md5(trim(trim($expression), "\'\""));

        return "v-SpladePreserveScroll:{$key}";
    }

    /**
     * Parses the expression given to the Table Cell directive. It returns
     * an array containing the name of the cell, and the callback
     * function that's used to render the contents of the cell.
     *
     * @param  string  $expression
     * @return array
     */
    public static function parseTableCellDirectiveExpression(string $expression): array
    {
        preg_match("/('|\")(\w+)('|\")(,)?(\s*)(.*)/", $expression, $matches);

        $name = trim($matches[2] ?? '');

        $arguments = trim($matches[6] ?? '', '\[\]');

        $splitted = preg_split('/\],(\s*)/', $arguments);

        $slotArguments = trim($splitted[0] ?? '');
        $slotUses      = trim(ltrim($splitted[1] ?? '', '['));

        $slotUses = $slotUses ? "\$__env, {$slotUses}" : '$__env';

        $function = "function ({$slotArguments})";
        $function .= " use ({$slotUses})";

        return [$name, $function];
    }

    /**
     * Registers the Blade @cell directive.
     *
     * @return void
     */
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
