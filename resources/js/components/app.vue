<template>
	<v-app>
		<navigation-drawer @home-page="homePage" @login-attempt="loginAttempt"></navigation-drawer>

		<v-content>
			<v-container fluid>
				<home-page v-if="showHomePage"></home-page>
				<login v-if="showLogin" @cancel-login="homePage"></login>
			</v-container>
		</v-content>
	</v-app>
</template>


<script>

import NavigationDrawer from './drawer'
import HomePage from './home'
import Login from './login'

export default {
	data: function() {
		return {
			showHomePage: true,
			showLogin: false
		};
	},
	methods: {
		homePage: function() {
			this.showLogin=false;
			this.showHomePage=true;
		},
		loginAttempt: function() {
			this.showHomePage=false;
			this.showLogin=true;
		}
	},
	components: {
		'navigation-drawer': NavigationDrawer,
		'home-page': HomePage,
		'login': Login
	}
};
</script>


<style></style>