<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Kirschbaum\PowerJoins\PowerJoins;

class Organization extends Model
{
    use HasFactory;

    public function address()
    {
        return $this->hasOne(Address::class);
    }
}
