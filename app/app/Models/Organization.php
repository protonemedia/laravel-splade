<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Kirschbaum\PowerJoins\PowerJoins;

class Organization extends Model
{
    use HasFactory;
    use PowerJoins;

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function address()
    {
        return $this->hasOne(Address::class);
    }
}
