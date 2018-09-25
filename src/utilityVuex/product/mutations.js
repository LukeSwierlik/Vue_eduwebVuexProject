import Vue from 'vue';

const mutations = {
    select(state, payload) {
        Vue.set(state.selected, payload.feature, payload.option);
    },
    finish(state) {
        state.finished = true;
    }
};

export default mutations;
