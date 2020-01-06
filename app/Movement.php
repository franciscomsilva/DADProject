<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Movement extends Model
{
    public $timestamps = false;
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id','wallet_id','type','transfer','transfer_movement_id','transfer_wallet_id','type_payment','category_id','iban','mb_entity_code','mb_payment_reference','description','source_description','start_balance','end_balance','value','date'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'date' => 'datetime'
    ];

    /**
     * Get the user record associated with this movement.
     * a user has many movements, but a movement belongs to a user
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'wallet_id');
    }

     /**
     * Get the wallet associated with the movement.
     */
    public function wallet()
    {
        return $this->belongsTo(Wallet::class, 'wallet_id');
    }
}
