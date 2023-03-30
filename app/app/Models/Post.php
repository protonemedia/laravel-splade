<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'body',
        'publish_from',
        'tags',
    ];

    protected $casts = [
        'publish_from' => 'datetime',
        'tags'         => 'array',
    ];
}
