@extends('master')

@section('title', 'Virtual Wallet')

@section('content')
	<v-navigation-drawer
		expand-on-hover
		dark
		app
	>
	    <!-- User info that appears on the drawer -->
		<template v-slot:prepend>
	        <v-list>
	        	<v-list-item>
	            	<v-list-item-avatar>
		        		<!-- Guest user avatar -->
	              		<v-img v-if="!$store.state.user || !$store.state.user.photo" src="{{asset('storage/fotos/unknow_user.png')}}"></v-img>
						<v-img v-else :src="'{{asset('storage/fotos')}}/' +  $store.state.user.photo"/>
		          	</v-list-item-avatar>
		        </v-list-item>
		        
	          	<v-list-item link two-line>
	            	<v-list-item-content>
	            		<!-- Show Guest User || Username & Smail -->
	              		<v-list-item-title class="title">@{{ $store.state.user != null ? $store.state.user.name : "Guest User" }}</v-list-item-title>
	              		<v-list-item-subtitle v-if="$store.state.user">@{{ $store.state.user.email }}</v-list-item-subtitle>
	            	</v-list-item-content>
	            	<v-list-item-action>
	            		<v-icon>mdi-menu-down</v-icon>
	            	</v-list-item-action>
	          	</v-list-item>
	        </v-list>
	    </template>


		<v-divider></v-divider>


		<!-- User options go here -->
		<v-list nav dense>
			<!-- Home Page Button -->
			<v-list-item link>
				<v-list-item-icon>
					<v-icon>mdi-folder</v-icon>
				</v-list-item-icon>
				<v-list-item-title v-on:click.prevent="homePage()">Home Page</v-list-item-title>
			</v-list-item>

			<!-- Guest user options -->
			<!-- Guest user must be able to create an account -->
			<v-list-item link v-show="!$store.state.user">
				<v-list-item-icon>
					<v-icon>mdi-account</v-icon>
				</v-list-item-icon>
				<v-list-item-title v-on:click.prevent="registerAccount()">Register</v-list-item-title>
			</v-list-item>


			<!-- Logged in user options -->
			<v-list-item link v-show="$store.state.user && !($store.state.user.type == 'a')">
				<v-list-item-icon>
					<v-icon>mdi-account-multiple</v-icon>
			    </v-list-item-icon>
			    <v-list-item-title v-on:click.prevent="listMovements()">Movements</v-list-item-title>
			</v-list-item>
			<v-list-item link v-show="$store.state.user && $store.state.user.type == 'a'">
				<v-list-item-icon>
					<v-icon>mdi-account-multiple</v-icon>
			    </v-list-item-icon>
			    <v-list-item-title v-on:click.prevent="listUsers()">Users</v-list-item-title>
			</v-list-item>
			<v-list-item link v-show="$store.state.user && $store.state.user.type == 'a'">
            	<v-list-item-icon>
            		<v-icon>mdi-chart-line-stacked</v-icon>
            	</v-list-item-icon>
            	<v-list-item-title v-on:click.prevent="listStatistics()">Statistics</v-list-item-title>
            </v-list-item>
		</v-list>

		<!-- Login and Logout buttons -->
		<template v-slot:append>
		   	<div>
		    	<v-btn block v-show="!$store.state.user" v-on:click.prevent="loginAttempt()">Login</v-btn>
		        <v-btn block v-show="$store.state.user" v-on:click.prevent="profile()">My Profile</v-btn>
		    	<v-btn block v-show="$store.state.user" v-on:click.prevent="logout()">Logout</v-btn>
		    </div>
		</template>
	</v-navigation-drawer>

	<router-view> </router-view>

@endsection
@section('pagescript')

	<script src="js/app.js"></script>
	
@stop  
