<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Wallet;
use App\Http\Resources\Wallet as WalletResource;

class WalletControllerAPI extends Controller
{
    public function index(Request $request){
        if ($request->has('page')) {
            return WalletResource::collection(User::paginate(5));
        } else {
            return WalletResource::collection(User::all());
        }
    }

    public function getWalletCount() {
    	return response()->json(Wallet::count());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Wallet $wallet)
    {
        return response()->json($wallet);
    }

    public function update(Request $request, $id)
    {
         $request->validate([
                   'id' => 'required',
                   'email' => 'required|email|unique:users,email',
                   'balance' => 'required'
         ]);


        $wallet = Wallet::findOrFail($id);
        $wallet->update($request->all());
        return new Wallet($wallet);
    }

}
