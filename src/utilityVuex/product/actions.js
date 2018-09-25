import axios from 'axios';

const actions = {
    orderProduct({ state, commit }) {
        const url = 'http://localhost:3000/order';

        axios
            .post(url, state.selected)
            .then(() => commit('finish'));
    }
};

export default actions;
