import { createRouter, createWebHistory } from "vue-router";
import root, { menus } from "./path.js";

const routes = root.concat(menus);

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.link = {
    LOGIN: () => router.push(root[0].path),
    HOME: () => router.push(root[1].path),
};

export default router;
