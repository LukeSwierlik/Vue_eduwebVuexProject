import axios from 'axios';

const actions = {
    finishQuiz(context, payload) {
        const { state, commit } = context;

        const url = 'http://localhost:3000/check';

        return axios
            .post(url, {
                answers: state.answers
            })
            .then(({ data }) => {
                commit('summary', { data });
            });
    }
};

export default actions;
