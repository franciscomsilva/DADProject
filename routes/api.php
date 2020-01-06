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

Route::middleware('auth:api')->get('/user', function (Requstoreest $request) {
    return $request->user();

});
Route::post('register', 'UserControllerAPI@store')->name('register');
//Login
Route::post('login', 'LoginControllerAPI@login')->name('login');
Route::middleware('auth:api')->post('logout','LoginControllerAPI@logout');



//Movements
Route::middleware('auth:api')->post('movements/update/{id}','MovementControllerAPI@update');
Route::middleware('auth:api')->post('registerMovement', 'MovementControllerAPI@store')->name('registerMovement');
Route::middleware('auth:api')->get('users/movements','UserMovementsControllerAPI@index');



//Wallets
Route::middleware('auth:api')->get('wallets/{wallet}', 'WalletControllerAPI@show');
Route::get('wallets','WalletControllerAPI@index')->name('wallets');
Route::get('walletCount', 'WalletControllerAPI@getWalletCount')->name('walletCount');

//Categories
Route::middleware('auth:api')->get('categories', 'CategoryControllerAPI@index');
Route::middleware('auth:api')->get('categories/incomeCategories', 'CategoryControllerAPI@showIncomeCategories');
Route::middleware('auth:api')->get('categories/debitCategories', 'CategoryControllerAPI@showDebitCategories');



//User

Route::get('users','UserControllerAPI@index')->name('users')->middleware('auth:api');
Route::middleware('auth:api')->get('users/me', 'UserControllerAPI@myProfile');
Route::middleware('auth:api')->get('usersList','UserControllerAPI@index');
Route::middleware('auth:api')->get('users/platformUsers', 'UserControllerAPI@indexPlatformUsers');
Route::middleware('auth:api')->get('users/{id}', 'UserControllerAPI@show');
Route::middleware('auth:api')->put('users/edit/{id}','UserControllerAPI@update');
Route::middleware('auth:api')->post('users/editStatus/{id}','UserControllerAPI@updateStatus');
Route::middleware('auth:api')->put('users/delete/{id}','UserControllerAPI@destroy');






