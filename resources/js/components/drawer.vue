<template>
	<v-navigation-drawer
		expand-on-hover
		dark
		src="https://media-manager.noticiasaominuto.com/1920/naom_5b0812ce246a2.jpg"
		app
	>
	    
		<template v-slot:prepend>
	        <v-list>
	        	<v-list-item>
	            	<v-list-item-avatar>
	        			<!-- Guest user avatar -->
	              		<v-img v-if="!loggedUser" src="https://www.standingstills.com/pub/media/catalog/product/cache/75eed2686e01eb22cb4050b2f40ddf97/c/a/cad195-1-1.jpg"></v-img>
	              		
	              		<!-- Logged in user avatar -->
	              		<!-- TODO - place user avatar -->
		          	</v-list-item-avatar>
		        </v-list-item>
		        
	          	<v-list-item link two-line>
	            	<v-list-item-content>
	            		<!-- Guest user "username" -->
	              		<v-list-item-title class="title">Guest User</v-list-item-title>

						<!-- Logged user username and email -->
						<!-- TODO - Insert username here and make email dynamic-->
	              		<v-list-item-subtitle v-if="loggedUser">email_lixo@gmail.com</v-list-item-subtitle>
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
			<v-list-item link v-if="!loggedUser">
				<v-list-item-icon>
					<v-icon>mdi-folder</v-icon>
				</v-list-item-icon>
				<v-list-item-title>Register</v-list-item-title>
			</v-list-item>


			<!-- Logged in user options -->
			<v-list-item link v-if="loggedUser">
				<v-list-item-icon>
					<v-icon>mdi-account-multiple</v-icon>
			    </v-list-item-icon>
			    <v-list-item-title>Movimentos</v-list-item-title>
			</v-list-item>
		</v-list>

		<!-- Login and Logout buttons -->
		<template v-slot:append>
		   	<div>
		    	<v-btn block v-if="!loggedUser" v-on:click.prevent="loginAttempt()">Login</v-btn>
		    	<v-btn block v-if="loggedUser" v-on:click.prevent="logout()">Logout</v-btn>
		    </div>
		</template>
	</v-navigation-drawer>
</template>


<script>
export default {
	data: function() {
		return {
			loggedUser:false
		};
	},
	methods: {
		homePage: function() {
			this.$emit('home-page');
		},
		loginAttempt: function() {
			this.$emit('login-attempt');
		},
		logout: function() {
			this.loggedUser=false;
			this.$emit('logout');
		}
	}
};
</script>


<style></style>