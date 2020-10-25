import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import User from "@/views/User";
const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
    },{
        path:"/user/:id",
        name:"User",
        component: User,
        props:true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
