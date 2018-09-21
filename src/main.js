// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './utilityVuex/store';
import "../node_modules/spectre.css/dist/spectre.min.css";
import "../node_modules/spectre.css/dist/spectre-icons.min.css";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
