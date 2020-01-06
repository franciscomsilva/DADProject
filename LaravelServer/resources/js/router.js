import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "./components/home";
import Login from "./components/login";
import RegisterAccount from "./components/register";
import Edit from "./components/users/EditComponent";
import ListMovements from "./components/movements/ListComponent";
import CreateMovements from "./components/movements/CreateComponent";
import ListUsers from "./components/users/ListUsers";
import store from './store.js';

Vue.use(VueRouter);

const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home', component: HomePage},
    {path: '/login', component: Login},
    {path: '/register', component: RegisterAccount},
    {path: '/profile', component: Edit},
    {path: '/movements', component: ListMovements},
    {path: '/movements/create', component: CreateMovements},
    {
        path: '/users', component: ListUsers, beforeEnter: (to, from, next) => {
            if (store.state.user.type == 'a') next(); else next('/home')
        }
    }

]


export default new VueRouter({
    routes
});