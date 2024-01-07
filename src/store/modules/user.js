import router from "@/router/index.js";

export default {
    state: {
        user: {},
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
    },
    getters: {
        getUser(state) {
            return state.user;
        },
    },
    actions: {
        login(store, payload) {
            setTimeout(() => {
                store.commit("setUser", {
                    id: payload.id,
                    username: "admin",
                    client: "ABLE C&C US",
                    warehouse: "Jersey A",
                });

                router.link.HOME();
            }, 500);
        },
    },
    namespaced: true,
};
