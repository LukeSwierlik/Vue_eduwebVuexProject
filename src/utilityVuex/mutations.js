import _ from "lodash";

const mutations = {
    updateUser(state, payload) {
        const index = _.findIndex(state.users, ["id", payload.id]);

        state.users[index][payload.type] = payload.value;
    },
    removeUser(state, payload) {
        state.users = state.users.filter(user => user.id !== payload);
    }
};

export default mutations;
