import Vue from 'vue';

const mutations = {
    selectAnswer(state, payload) {
        Vue.set(state.answers, payload.id, payload.answer);
    },
    changeCurrent(state, payload) {
        state.currentQuestion += payload.n;
    }
};

export default mutations;
