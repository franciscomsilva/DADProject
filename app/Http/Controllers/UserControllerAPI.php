<?php

namespace App\Http\Controllers;

use App\User;
use App\Wallet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\File;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

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


    public function store(Request $request)
    {
       
        $request->validate([
            'type' => 'required|in:u,a,o',
            'active' => 'required|in:1,0', 
            'name' => 'required|string|min:3|regex:/^[A-Za-záàâãéèêíóôõúçÁÀÂÃÉÈÍÓÔÕÚÇ ]+$/',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:3|confirmed',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,bmp',
            'nif' => 'nullable|digits:9|regex:/^[0-9]{9}+$/'    
        ]);

        $user = new User();

        if($request->has('photo')) {
            $name = Str::uuid() . '.' . $request->photo->getClientOriginalExtension();
            $targetDir = storage_path("app/public/fotos");
            $request->photo->move($targetDir, $name);
            $user->photo = $name;
        }

        $user->fill($request->all());
        $user->password = Hash::make($user->password);
        $user->save();

        $user->wallet()->create($request->only('email'));

        return response()->json(new UserResource($user), 201);
    }
}
