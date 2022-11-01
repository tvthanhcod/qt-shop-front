import { HomePage, ShopPage, ChiTiet } from "../Views"




export const publicRoute = [
    { path: "/", component: <HomePage /> },
    { path: "/shop", component: <ShopPage /> },
    { path: "/chitiet/:slug", component: <ChiTiet /> },

]


export const privateRoute = [

]