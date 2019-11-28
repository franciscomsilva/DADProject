<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

use App\Http\Resources\User as UserResource;


class UserControllerAPI extends Controller
{
    public function index(Request $request){
        if ($request->has('page')) {
            return UserResource::collection(User::paginate(5));
        } else {
            return UserResource::collection(User::all());
        }
    }

    public function show($id)
    {
        return new UserResource(User::find($id));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            
            ]);
        $user = User::findOrFail($id);
        $user->update($request->all());
        return new UserResource($user);
    }

}
