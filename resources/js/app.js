require('./bootstrap');
/*jshint esversion: 6 */

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require('vue');
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Vuetify from 'vuetify'
Vue.use(Vuetify)
import Vuex from 'vuex'
Vue.use(Vuex)


import store from "./store";
import HomePage from './components/home'
import Login from './components/login'
import RegisterAccount from './components/register'
import Edit from './components/edit'

const routes = [
    {path:'/', redirect: '/home'},
    {path:'/home', component: HomePage},
    {path:'/login', component: Login},
    {path:'/register', component: RegisterAccount},
    {path:'/edit',component: Edit}
]

const router = new VueRouter({ routes })


const app = new Vue({
    vuetify: new Vuetify(),
    router,
    store,
    created() {
        this.$store.commit('loadTokenAndUserFromSession');
    },
    methods: {
        homePage: function() {
            this.$router.push('/')
        },
        loginAttempt: function() {
            this.$router.push('/login')
        },
        logout: function(){
            axios.post("api/logout")
                .then(response => {
                    this.$store.commit("clearUserAndToken");
                    this.$router.push('/')
                })
                .catch(error => {
                    this.$store.commit("clearUserAndToken");
                    console.log(error);
                });
        },
        registerAccount: function() {
            this.$router.push('/register')
        }
    }
}).$mount("#app");