<?php

namespace App\Http\Controllers;

use App\User;
use App\Wallet;
use App\Movement;
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

    public function indexPlatformUsers()
    {
        $users = User::where('type','=','u')->get();

        return response()->json($users);
    }
    public function updateStatus(Request $request, $id)
    {
         $request->validate([
                   'active' => 'required|in:0,1'
         ]);

        $user = User::findOrFail($id);
        $user->update($request->all());
        return new UserResource($user);
    }
    

    public function update(Request $request, $id)
    {
         $request->validate([
                   'name' => 'required|string|min:3|regex:/^[A-Za-záàâãéèêíóôõúçÁÀÂÃÉÈÍÓÔÕÚÇ ]+$/',
                   'newPassword' => 'min:3',
                    'photo' => 'nullable|image|mimes:jpeg,png,jpg,bmp',
                   'nif' => 'nullable|digits:9|regex:/^[0-9]{9}+$/'
         ]);



            if($request->has('photo')) {
             $name = Str::uuid() . '.' . $request->photo->getClientOriginalExtension();
             $targetDir = storage_path("app/public/fotos");
             $request->photo->move($targetDir, $name);
             $user->photo = $name;
         }

        $user = User::findOrFail($id);
          if($request->has('photo')) {
                   $photo_name = Str::uuid() . '.' . $request->photo->getClientOriginalExtension();
                   $targetDir = storage_path("app/public/fotos");
                   $request->photo->move($targetDir, $photo_name);
                   $user->photo = $photo_name;
          }


        $user->update($request->all());

        if($request->has('oldPassword') && !Hash::check($request->oldPassword, $user->password)){
            return response()->json("Old password incorrect!");
        }else{
            $user->password = Hash::make($request->newPassword);
        }

        $user->save();
        return response()->json(new UserResource($user), 201);
    }


    public function store(Request $request)
    {
       
        $request->validate([
            'type' => 'required|in:u,a,o',
            'active' => 'required|in:1,0', 
            'name' => 'required|string|min:3|regex:/^[A-Za-záàâãéèêíóôõúçÁÀÂÃÉÈÍÓÔÕÚÇ ]+$/',
            'email' => 'required|email|unique:users,email',
            'password' => 'nullable|min:3|confirmed',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,bmp',
             'nif' => 'nullable|digits:9|regex:/^[0-9]{9}+$/'
        ]);

        $user = new User();

        if($request->has('photo')) {
            $photo_name = Str::uuid() . '.' . $request->photo->getClientOriginalExtension();
            $targetDir = storage_path("app/public/fotos");
            $request->photo->move($targetDir, $photo_name);
            $user->photo = $photo_name;
        }

        $user->fill($request->all());
        $user->password = Hash::make($user->password);
        $user->save();
        if($user->type === 'u'){
            $user->wallet()->create($request->only('email'));
        }        
        return response()->json(new UserResource($user), 201);
    }

    public function myProfile(Request $request)
    {
        return new UserResource($request->user());
    }

     /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return response()->json(null, 204);
    }
}
