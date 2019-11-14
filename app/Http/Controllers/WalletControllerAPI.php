<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WalletControllerAPI extends Controller
{
    public function index(Request $request){
        if ($request->has('page')) {
            return UserResource::collection(User::paginate(5));
        } else {
            return UserResource::collection(User::all());
        }
    }
}
