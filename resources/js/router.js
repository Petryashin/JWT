import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: () => import("./components/Fruit/Index"),
            name: "fruit.index",
        },
        {
            path: "/user/login",
            component: () => import("./components/User/Login"),
            name: "user.login",
        },
        {
            path: "/user/registration",
            component: () => import("./components/User/Registration"),
            name: "user.registration",
        },
        {
            path: "/user/personal",
            component: () => import("./components/User/Personal"),
            name: "user.personal",
        },
    ],
});
