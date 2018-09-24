import Vue from 'vue';
import Vuex from 'vuex';
import moduleUsers from './users/module';
import moduleProduct from './product/module';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        storeUsers: moduleUsers,
        storeProduct: moduleProduct
    }
});
