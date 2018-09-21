const getters = {
    female(state) {
        return state.users.filter(user => user.gender === "female");
    },
    male(state) {
        return state.users.filter(user => user.gender === "male");
    },
    returnUser(state) {
        return id => {
            console.log('id', id);
            console.log('state.users', state.users);
            return state.users.find(user => user.id === id);
        }
    }
};

export default getters;
