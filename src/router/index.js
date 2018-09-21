import Vue from 'vue'
import Router from 'vue-router'
import Users from '../containers/Users';
import Home from '../containers/Home';
import UserDetails from '../containers/UserDetails';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/users',
            name: 'Users',
            component: Users
        },
        {
            path: '/users/:id',
            name: 'UserDetails',
            component: UserDetails
        },
    ],
    linkActiveClass: "text-bold"
})
