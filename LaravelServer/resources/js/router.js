import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "./components/home";
import Login from "./components/login";
import RegisterAccount from "./components/register";
import Edit from "./components/users/EditComponent";
import ListMovements from "./components/movements/ListComponent";
import CreateMovements from "./components/movements/CreateComponent";
import ListUsers from "./components/users/ListUsers";
import UserStatistics from "./components/statistics/PersonalStatistics";
import  "./toast";

Vue.use(VueRouter);

let user =  JSON.parse(sessionStorage.getItem("user"));

const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home', component: HomePage},
    {path: '/login', component: Login, beforeEnter: (to, from, next) => {
            if (user == null) next(); else next('/home')
        }
    },
    {path: '/register', component: RegisterAccount, beforeEnter: (to, from, next) => {
            if (user == null) next(); else next('/home')
        }
    },
    {path: '/profile', component: Edit},
    {path: '/movements/create', component: CreateMovements},
    {path: '/users', component: ListUsers, beforeEnter: (to, from, next) => {
            if (user.type ==='a') next(); else{
                Vue.toasted.global.unauthorized();
                next('/home');
            }
        }
    },
    {path: '/movements', component: ListMovements, beforeEnter: (to, from, next) => {
            if (user.type === 'o') {
                next('/movements/create');
            }else if(user.type != 'a'){
                next();
            }else{
                Vue.toasted.global.unauthorized();
                next('/home');
            }
        }
    },
    {path: '/movements/statistics', component: UserStatistics, beforeEnter: (to, from, next) => {
            if (user.type === 'u') {
                next();
            } else {
                Vue.toasted.global.unauthorized();
                next('/movements');
            }
        }
    }

]

const router = new VueRouter({
    routes
});

/*CHECK IF USER IS AUTHENTICATED*/
router.beforeEach((to, from, next) => {
    user =  JSON.parse(sessionStorage.getItem("user"));
    if(to.path != '/login' && to.path != '/register' && to.path != '/home'){
        if(user == null){
            Vue.toasted.global.unauthenticated();
            next('/login');
        }else{
            next();
        }
    }else{
        next();
    }

})

export default router ;