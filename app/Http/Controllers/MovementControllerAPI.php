<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;
use App\Wallet;
use App\Movement;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\File;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;


class MovementControllerAPI extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $movements = request()->all();

        return response()->json($movements);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $request->validate([
            'wallet_id' => 'nullable|required_if:type,i',
            'type' => 'required|in:e,i', 
            'transfer' =>'nullable',
            'transfer_movement_id'=>'nullable',
            'transfer_wallet_id'=>'nullable',
            'type_payment'=>'nullable|in:bt,c,mb',
            'category_id'=>'nullable',
            'iban'=>'nullable|required_if:type_payment,bt|string|min:25|regex:/^[A-Z]{2}[0-9]{23}$/',
            'mb_entity_code'=>'nullable|digits:5|regex:/^[0-9]{5}$/',
            'mb_payment_reference'=>'nullable|digits:9|regex:/^[0-9]{9}$/',
            'description'=>'nullable|string',
            'source_description'=>'nullable|string',
            'value'=>'required'
        ]);

        $movement = new Movement();
        
        
        $movement->fill($request->all());
        
        if($movement->type === 'e'){
            $movement->wallet_id = $request->user()->id;
        }
        $user_wallet = $movement->wallet;
        $movement->start_balance  = $user_wallet->balance;
        
        
        $movement->end_balance = $user_wallet->balance + $movement->value;
        $movement->date = now();
        $movement->save();        
            
        $movement->wallet()->update(['balance'=> $movement->end_balance]);

        return $movement;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}