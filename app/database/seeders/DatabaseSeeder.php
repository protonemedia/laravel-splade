<?php

namespace Database\Seeders;

use App\Models\Dummy;
use App\Models\User;
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

        /** @var User $user */
        $firstUser = UserFactory::new()->create([
            'name'  => 'Test User',
            'email' => 'test@example.com',
        ]);

        static::giveUserMedia($firstUser);

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

    public static function giveUserMedia(User $user)
    {
        $user
            ->clearMediaCollection('avatar')
            ->clearMediaCollection('photos')
            ->clearMediaCollection('documents');

        $user->addMedia(public_path('1.jpeg'))->preservingOriginal()->toMediaCollection('avatar');
        $user->addMedia(public_path('1.jpeg'))->preservingOriginal()->toMediaCollection('photos');
        $user->addMedia(public_path('2.jpeg'))->preservingOriginal()->toMediaCollection('photos');
        $user->addMedia(public_path('dummy1.txt'))->preservingOriginal()->toMediaCollection('documents');
        $user->addMedia(public_path('dummy2.txt'))->preservingOriginal()->toMediaCollection('documents');
    }
}
