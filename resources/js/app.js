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
import Application from './components/app'
import Edit from './components/edit'
import store from "./store";


Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(Vuex)

const routes = [
    {path:'/', component:Application},
    {path:'/edit',component:Edit}
]

const router = new VueRouter({ routes })


const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    router,
    store,
    data: {
        drawer: null
    },
    methods: {
    },
    created() {
        this.$store.commit('loadTokenAndUserFromSession');
    }
});

