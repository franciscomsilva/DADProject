<template>
	<v-app>
		<navigation-drawer 
			@home-page="homePage"
			@login-attempt="loginAttempt"
			@register-account="registerAccount"
		></navigation-drawer>

		<v-content>
			<v-container fluid>
				<home-page v-if="showHomePage"></home-page>
				<login v-if="showLogin" @cancel-login="homePage"></login>
				<register-account v-if="showRegister"></register-account>
			</v-container>
		</v-content>
	</v-app>
</template>


<script>

import NavigationDrawer from './drawer'
import HomePage from './home'
import Login from './login'
import RegisterAccount from './register'

export default {
	data: function() {
		return {
			showHomePage: true,
			showLogin: false,
			showRegister: false
		};
	},
	methods: {
		homePage: function() {
			this.showLogin=false;
			this.showRegister=false;
			this.showHomePage=true;
		},
		loginAttempt: function() {
			this.showHomePage=false;
			this.showRegister=false;
			this.showLogin=true;
		},
		registerAccount: function() {
			this.showHomePage=false;
			this.showLogin=false;
			this.showRegister=true;
		}
	},
	components: {
		'navigation-drawer': NavigationDrawer,
		'home-page': HomePage,
		'login': Login,
		'register-account': RegisterAccount
	}
};
</script>


<style></style>