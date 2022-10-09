<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Staudenmeir\EloquentHasManyDeep\HasRelationships;

class Organization extends Model
{
    use HasFactory;
    use HasRelationships;

    public function mainUser()
    {
        return $this->belongsTo(User::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function projects()
    {
        return $this->hasManyDeep(Project::class, ['organization_user', User::class, 'project_user']);
    }
}
