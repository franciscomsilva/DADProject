<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();

});

Route::post('login', 'LoginControllerAPI@login')->name('login');
Route::post('register', 'UserControllerAPI@store')->name('register');
Route::middleware('auth:api')->post('logout','LoginControllerAPI@logout');
Route::get('users','UserControllerAPI@index')->name('users')->middleware('auth:api');
Route::get('wallets','WalletControllerAPI@index')->name('wallets');
Route::get('walletCount', 'WalletControllerAPI@getWalletCount')->name('walletCount');
Route::middleware('auth:api')->get('users/me', 'UserControllerAPI@myProfile');
Route::get('users/{id}', 'UserControllerAPI@show');
Route::put('users/{id}','UserControllerAPI@update');



