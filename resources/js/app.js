require('./bootstrap');
/*jshint esversion: 6 */

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require('vue');
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import Vuex from 'vuex'


Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(Vuex)


import Login from './components/login'
import Register from './components/register'


const routes = [
    {path:'/login',component:Login},
    {path:'/register',component:Register},
    
]

const router = new VueRouter({
    routes
})


const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    router,
    data: {
        drawer: null
    },
    methods: {
    },
    mounted() {
        
    }
});

