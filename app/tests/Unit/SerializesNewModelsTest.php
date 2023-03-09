<?php

namespace Tests\Unit;

use App\Models\User;
use Illuminate\Contracts\Database\ModelIdentifier;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;
use ProtoneMedia\Splade\Components\SerializesNewModels;
use ProtoneMedia\Splade\QueueableCollectionWithNewModels;
use Tests\TestCase;

class SerializesNewModelsTest extends TestCase
{
    private $serializer;

    public function setUp(): void
    {
        parent::setUp();

        $this->serializer = new class
        {
            use SerializesNewModels;
        };

        $this->serializer = invade($this->serializer);
    }

    /** @test */
    public function it_serializes_and_restores_existing_models()
    {
        $model = User::firstOrFail();

        $serialized = $this->serializer->getSerializedPropertyValue($model);

        $this->assertInstanceOf(ModelIdentifier::class, $serialized);

        $restored = $this->serializer->getRestoredPropertyValue($serialized);

        $this->assertTrue($model->is($restored));
    }

    /** @test */
    public function it_serializes_and_restores_new_models()
    {
        $model = new User(['name' => 'John Doe']);

        $serialized = $this->serializer->getSerializedPropertyValue($model);

        $this->assertInstanceOf(User::class, $serialized);

        $restored = $this->serializer->getRestoredPropertyValue($serialized);

        $this->assertInstanceOf(User::class, $restored);
        $this->assertFalse($restored->exists);
        $this->assertEquals('John Doe', $restored->name);
    }

    /** @test */
    public function it_serializes_and_restores_a_collection_of_existing_models()
    {
        $models = User::limit(2)->get();
        $this->assertCount(2, $models);

        $serialized = $this->serializer->getSerializedPropertyValue($models);

        $this->assertInstanceOf(ModelIdentifier::class, $serialized);

        DB::enableQueryLog();

        $restored = $this->serializer->getRestoredPropertyValue($serialized);

        $this->assertCount(1, DB::getQueryLog());

        DB::disableQueryLog();

        $this->assertCount(2, $restored);
    }

    /** @test */
    public function it_serializes_and_restores_a_collection_of_new_models()
    {
        $models = new Collection([
            new User(['name' => 'John Doe']),
            new User(['name' => 'Jane Doe']),
        ]);

        $serialized = $this->serializer->getSerializedPropertyValue($models);

        $this->assertInstanceOf(QueueableCollectionWithNewModels::class, $serialized);

        DB::enableQueryLog();

        $restored = $this->serializer->getRestoredPropertyValue($serialized);

        $this->assertCount(0, DB::getQueryLog());

        DB::disableQueryLog();

        $this->assertCount(2, $restored);

        $this->assertEquals('John Doe', $restored->first()->name);
        $this->assertEquals('Jane Doe', $restored->last()->name);
    }

    /** @test */
    public function it_serializes_and_restores_a_collection_of_mixed_models()
    {
        $models = new Collection([
            new User(['name' => 'John Doe']),
            $existingUser = User::firstOrFail(),
            new User(['name' => 'Jane Doe']),
        ]);

        $serialized = $this->serializer->getSerializedPropertyValue($models);

        $this->assertInstanceOf(QueueableCollectionWithNewModels::class, $serialized);

        DB::enableQueryLog();

        $restored = $this->serializer->getRestoredPropertyValue($serialized);

        $this->assertInstanceOf(Collection::class, $restored);
        $this->assertCount(1, DB::getQueryLog());

        DB::disableQueryLog();

        $this->assertCount(3, $restored);

        $this->assertEquals('John Doe', $restored->get(0)->name);
        $this->assertTrue($existingUser->is($restored->get(1)));
        $this->assertEquals('Jane Doe', $restored->get(2)->name);
    }
}
