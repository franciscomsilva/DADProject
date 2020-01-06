require('./bootstrap');
/*jshint esversion: 6 */

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import '@mdi/font/css/materialdesignicons.css'
window.Vue = require('vue');
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Vuetify from 'vuetify'
Vue.use(Vuetify)
import Vuex from 'vuex'
Vue.use(Vuex)
import VueSocketIO from 'vue-socket.io'
Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://localhost:8080'
}));


import Toasted from "vue-toasted";

Vue.use(Toasted, {
    position: "bottom-center",
    duration: 5000,
    type: "info"
});

import store from "./store";
import router from "./router"



const app = new Vue({
    vuetify: new Vuetify({
        icons: {
          iconfont: 'mdi',
        },
      }),
    store,
    router,
    created() {
        store.commit('loadTokenAndUserFromSession');
        /*REGISTER IN SOCKET*/
        if(this.$store.state.user)
            this.$socket.emit('register',this.$store.state.user);
    },
    sockets:{
        transfer(user) {
            this.$toasted.show(`Received transfer of ${user.amount}€ from ${user.name}!`);
        }
    },
    methods: {
        homePage: function() {
            this.$router.push('/').catch(err => {})
        },
        loginAttempt: function() {
            this.$router.push('/login').catch(err => {})
        },
        logout: function(){
            axios.post("api/logout")
                .then(response => {
                    this.$store.commit("clearUserAndToken");
                    this.$router.push('/').catch(err => {})
                })
                .catch(error => {
                    this.$store.commit("clearUserAndToken");
                    console.log(error);
                });
        },
        registerAccount: function() {
            this.$router.push('/register').catch(err => {})
        },
            createMovements: function(){
            this.$router.push('/registerIncome').catch(err => {})
        },
        profile(){
            this.$router.push('/profile').catch(err => {})

        },
        listMovements: function(){
            this.$router.push('/movements').catch(err => {})
        },
        listUsers: function(){
            this.$router.push('/users').catch(err => {})
        },
        isAdmin(){
            if($store.state.user.type == 'a'){
                return true;
            }
            return false;
        }

    }
}).$mount("#app");