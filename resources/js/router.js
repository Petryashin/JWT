import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const route = new VueRouter({
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
        {
            path: "*",
            component: () => import("./components/User/Personal"),
            name: "404",
        },
    ],
});
route.beforeEach((to, from, next) => {
    const access_token = localStorage.getItem("access_token");

    if (!access_token) {
        if (to.name == "user.login" || to.name == "user.registration") {
            return next();
        } else {
            return next({ name: "user.login" });
        }
    }
    next()
});
export default route;
