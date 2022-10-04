<?php

namespace Tests\Unit;

use ProtoneMedia\Splade\Http\BladeDirectives;
use Tests\TestCase;

class BladeDirectivesTest extends TestCase
{
    /** @test */
    public function it_parses_the_expression_into_a_name_and_function()
    {
        [$name, $function] = BladeDirectives::parseTableCellDirectiveExpression("'action', \$user");

        $this->assertEquals('action', $name);
        $this->assertEquals('function ($user) use ($__env)', $function);
    }
    /** @test */
    public function it_parses_the_expression_without_a_second_argument()
    {
        [$name, $function] = BladeDirectives::parseTableCellDirectiveExpression("'action'");

        $this->assertEquals('action', $name);
        $this->assertEquals('function () use ($__env)', $function);
    }

    /** @test */
    public function it_parses_the_expression_into_a_name_and_function_and_you_can_use_the_key()
    {
        [$name, $function] = BladeDirectives::parseTableCellDirectiveExpression("'action', \$user, \$key");

        $this->assertEquals('action', $name);
        $this->assertEquals('function ($user, $key) use ($__env)', $function);
    }

    /** @test */
    public function it_parses_the_expression_into_a_name_and_function_and_use_a_variable_from_outside_the_scope()
    {
        [$name, $function] = BladeDirectives::parseTableCellDirectiveExpression("'action', [\$user], \$account");

        $this->assertEquals('action', $name);
        $this->assertEquals('function ($user) use ($__env, $account)', $function);

        [$name, $function] = BladeDirectives::parseTableCellDirectiveExpression("'action', [\$user], [\$account]");

        $this->assertEquals('action', $name);
        $this->assertEquals('function ($user) use ($__env, $account)', $function);

        [$name, $function] = BladeDirectives::parseTableCellDirectiveExpression("'action', [\$user], [\$account, \$page]");

        $this->assertEquals('action', $name);
        $this->assertEquals('function ($user) use ($__env, $account, $page)', $function);
    }
}
