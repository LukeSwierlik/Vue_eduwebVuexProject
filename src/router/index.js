import Vue from 'vue'
import Router from 'vue-router'
import Users from '../containers/Users';
import Home from '../containers/Home';
// import UserDetails from '../containers/UserDetails';
// import UserEdit from '../containers/UserEdit';
import UserLogin from '../components/User/UserLogin';
import Product from '../components/Product/Product';
import Quiz from '../components/Quiz/Quiz';

Vue.use(Router);

const UserEdit = () => import(/* webpackChunkName: "user" */ '../components/User/UserEdit');
const UserDetails = () => import(/* webpackChunkName: "user" */ '../components/User/UserDetails');

export default new Router({
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    },
    mode: 'history',
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
            path: '/user/:id',
            name: 'UserDetails',
            component: UserDetails,
            props: true,
            children: [{
                path: 'edit',
                name: 'UserEdit',
                component: UserEdit,
                props: true
            }]
        },
        {
            path: '/login',
            name: 'Login',
            component: UserLogin
        },
        {
            path: '/product',
            name: 'Product',
            component: Product
        },
        {
            path: '/quiz',
            name: 'MainQuiz',
            redirect: {
                name: 'Quiz',
                params: {
                    number: 1
                }
            },
        },
        {
            path: '/question/:number',
            name: 'Quiz',
            component: Quiz,
            props: true
        }
    ],
    linkActiveClass: "text-bold"
})
