<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Sale extends Model
{
    protected $fillable = ['rendemen_id', 'user_id', 'name', 'nik', 'email', 'address', 'maps', 'img', 'land', 'number', 'price', 'reflaction', 'weight'];

    public function rendemen(): BelongsTo
    {
        return $this->belongsTo(Rendemen::class);
    }
}
