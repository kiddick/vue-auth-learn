import Vue from 'vue'
import Router from 'vue-router'
import store from './store';

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Secure from '@/components/Secure.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/secure',
            name: 'secure',
            component: Secure,
            meta: {
                requiredAuth: true
            }
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiredAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
})

export default router