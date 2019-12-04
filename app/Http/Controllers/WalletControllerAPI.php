<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
}
