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
        return $this->belongsToMany(User::class);
    }

    public function project()
    {
        return $this->hasOne(Project::class);
    }

    public function mainUser()
    {
        return $this->belongsTo(User::class);
    }
}
