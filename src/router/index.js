import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "@/views/Home";

const root = [
    {
        path: "/",
        name: "Login",
        component: Login,
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
];

export const menus = [
    { id: 1, title: "Move location (Pallet)", path: "/move_location" },
    { id: 2, title: "Order scan (Pallet replace)", path: "" },
    { id: 3, title: "Pallet check", path: "" },
    { id: 4, title: "Order check", path: "" },
    { id: 5, title: "Stock check", path: "" },
    { id: 6, title: "Pallet + Pallet", path: "" },
    { id: 7, title: "Full pallte return", path: "" },
];

const routes = root.concat(menus);

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
