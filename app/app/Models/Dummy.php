<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dummy extends Model
{
    use HasFactory;

    public $casts = [
        'checkbox' => 'boolean',
        'json'     => 'json',
    ];
}
