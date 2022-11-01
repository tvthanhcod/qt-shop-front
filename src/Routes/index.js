import { HomePage, ShopPage, ChiTiet, AddCard } from "../Views"




export const publicRoute = [
    { path: "/", component: <HomePage /> },
    { path: "/shop", component: <ShopPage /> },
    { path: "/chitiet/:slug", component: <ChiTiet /> },
    { path: "/card/:slug", component: <AddCard /> },


]


export const privateRoute = [

]