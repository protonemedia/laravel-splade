<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dummies', function (Blueprint $table) {
            $table->id();
            $table->string('input');
            $table->text('textarea');
            $table->string('select');
            $table->boolean('checkbox');
            $table->string('radio');
            $table->json('json');
            $table->string('secret');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dummies');
    }
};
