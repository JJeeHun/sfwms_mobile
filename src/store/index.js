import { createStore } from "vuex";
import router from "@/router/index.js";

export default createStore({
    state: {
        user: {},
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
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

                router.push("/home");
            }, 1000);
        },
    },
    modules: {},
});
