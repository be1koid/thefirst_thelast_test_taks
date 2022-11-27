import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from "@/components/LandingPage";
import RedirectPage from "@/components/RedirectPage";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'landingPage',
        component: LandingPage,
        meta: { transition: 'slide-left' }
    },
    {
        path: '/page',
        name: 'redirectPage',
        component: RedirectPage,
        meta: { transition: 'slide-left' }
    },
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
