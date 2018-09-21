const actions = {
    removeUser(context, payload) {
        setTimeout(() => {
            context.commit("removeUser", payload);
        }, 1200);
    }
};

export default actions;
