<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Wallet extends Model
{
    protected $fillable = [
        'email', 'balance'
    ];

    /**
     * Get the user record associated with this wallet.
     * a user has one wallet, but a wallet belongs to a user
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'id');
    }

     /**
     * Get the movements records associated with the wallet.
     */
    public function movements()
    {
        return $this->hasMany(Movement::class, 'id');
    }
}
