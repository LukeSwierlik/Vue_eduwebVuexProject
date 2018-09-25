const getters = {
    selected(state) {
        return (question_id, answer_key) => {
            return state.answers[question_id] === answer_key;
        }
    }
};

export default getters;
