<?php

namespace Database\Seeders;

use Database\Factories\KeywordFactory;
use Database\Factories\TagFactory;
use Database\Factories\UserFactory;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        KeywordFactory::new()->count(10)->create();

        TagFactory::new()->count(10)->create();

        UserFactory::new()->create([
            'name'  => 'Test User',
            'email' => 'test@example.com',
        ]);

        UserFactory::new()->count(99)->create();
    }
}
