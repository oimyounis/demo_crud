import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import {isLoggedIn, logout} from "@/services/UserService";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
        path: '/logout',
        name: 'logout',
        beforeEnter: (to, from, next) => {
            logout();
            next({name: 'home'})
        }
    },
      {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
      },
    {
        path: '/users',
        name: 'users',
        component: () => import(/* webpackChunkName: "users-list" */ './views/Users/List.vue'),
        beforeEnter: (to, from, next) => {
            if (isLoggedIn()) {
                next();
            }
            else {
                next({name: 'login'})
            }
        }
    },
    {
        path: '/users/add',
        name: 'add-user',
        component: () => import(/* webpackChunkName: "users-add" */ './views/Users/Add.vue')
    },
    {
        path: '/user/:pk',
        name: 'edit-user',
        component: () => import(/* webpackChunkName: "users-edit" */ './views/Users/Edit.vue')
    }
  ]
})
