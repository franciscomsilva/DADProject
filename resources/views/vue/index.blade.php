@extends('master')

@section('title', 'Virtual Wallet')

@section('content')

<router-view> </router-view>

<router-link to="/">Users</router-link>
<br>
<router-link to="/login">Login</router-link>
<br>
@endsection
@section('pagescript')
<script src="js/app.js"></script>
@stop  
