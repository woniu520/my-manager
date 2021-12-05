import VueRouter from "vue-router";
import Vue from "vue";
import loginRegister from "@/views/loginRegister";

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        name: 'login',
        component: loginRegister
    }
]

const router = new VueRouter({
    base:process.env.BASE_URL,
    routes,
    mode: 'history'
})
export default router