<?php

namespace Database\Seeders;

use App\Models\Dummy;
use Database\Factories\KeywordFactory;
use Database\Factories\ProjectFactory;
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

        $users = UserFactory::new()->count(99)->create();

        Dummy::create([
            'input'    => 'input',
            'textarea' => 'textarea',
            'select'   => 'b',
            'checkbox' => true,
            'radio'    => 'b',
            'json'     => ['nested' => ['array'], 'key' => 'key'],
            'secret'   => 'secret',
        ]);

        ProjectFactory::new()
            ->count(30)
            ->create();
    }
}
