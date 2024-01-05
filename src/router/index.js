import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "@/views/Home";
import MoveLocation from "@/views/MoveLocation";
import OrderScan from "@/views/OrderScan";
import PalletCheck from "@/views/PalletCheck";
import OrderCheck from "@/views/OrderCheck";
import StockCheck from "@/views/StockCheck";
import PalletPallet from "@/views/PalletPallet";
import FullPallteReturn from "@/views/FullPallteReturn";

const root = [
    { path: "/", name: "Login", component: Login, },
    { path: "/home", name: "Home", component: Home, },
];

export const menus = [
    { id: 1, title: "Move location (Pallet)", path: "/move/location" ,component: MoveLocation},
    { id: 2, title: "Order scan (Pallet replace)", path: "/order/scan" ,component:OrderScan},
    { id: 3, title: "Pallet check", path: "/pallet/check" ,component:PalletCheck},
    { id: 4, title: "Order check", path: "/order/check" ,component:OrderCheck},
    { id: 5, title: "Stock check", path: "/stock/check" ,component:StockCheck},
    { id: 6, title: "Pallet + Pallet", path: "/pallet/pallet" ,component:PalletPallet},
    { id: 7, title: "Full pallte return", path: "/pallet/return" ,component:FullPallteReturn},
];


const custom = {
    HOME: () => router.push(root[1].path),
}

const routes = root.concat(menus);

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.custom = custom;

export default router;
