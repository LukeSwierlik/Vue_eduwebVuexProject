const getters = {
    selected(state) {
        return (question_id, answer_key) => {
            return state.answers[question_id] === answer_key;
        }
    },
    answered(state) {
        return (id) => {
            return state.answers[id] !== undefined;
        }
    }
};

export default getters;
