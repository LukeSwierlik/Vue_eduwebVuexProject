const getters = {
    female(state) {
        return state.users.filter(user => user.gender === "female");
    },
    male(state) {
        return state.users.filter(user => user.gender === "male");
    },
    returnUser(state) {
        return id => {
            return state.users.find(user => user.id === parseInt(id, 10));
        }
    }
};

export default getters;
