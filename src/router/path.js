import Login from "../views/Login.vue";
import Home from "@/views/Home";
import MoveLocation from "@/views/MoveLocation";
import OrderScan from "@/views/OrderScan";
import PalletCheck from "@/views/PalletCheck";
import OrderCheck from "@/views/OrderCheck";
import StockCheck from "@/views/StockCheck";
import PalletPallet from "@/views/PalletPallet";
import FullPalletReturn from "@/views/FullPalletReturn";

export default [
    { path: "/",     name: "Login", component: Login },
    { path: "/home", name: "Home",  component: Home },
];

export const menus = [
    { id: 1, path: "/move/location", component: MoveLocation,       name: "Move location (Pallet)",       },
    { id: 2, path: "/order/scan",    component: OrderScan,          name: "Order scan (Pallet replace)",  },
    { id: 3, path: "/pallet/check",  component: PalletCheck,        name: "Pallet check",                 },
    { id: 4, path: "/order/check",   component: OrderCheck,         name: "Order check",                  },
    { id: 5, path: "/stock/check",   component: StockCheck,         name: "Stock check",                  },
    { id: 6, path: "/pallet/pallet", component: PalletPallet,       name: "Pallet + Pallet",              },
    { id: 7, path: "/pallet/return", component: FullPalletReturn,   name: "Full pallte return",           },
];
