import VueRouter from 'vue-router'
import Vue from "vue";


Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {
            path:'/',
            redirect:'/algdiff'
        },
        {
            path: '/',
            component: () => import('@/components/charts/Question2Chart.vue')
        },
        {
            path: '/home',
            component: () => import('@/components/common/Home'),
            children: [
                {
                    path: '/algdiff',
                    component: () => import('@/components/page/AlgDiffPage.vue')
                },
                {
                    path: '/rundata',
                    component: () => import('@/components/page/RunDataPage.vue')
                },
                {
                    path: '/day',
                    component: () => import('@/components/page/ProblemEveryDay.vue')
                },
                {
                    path: '/deep',
                    component: () => import('@/components/page/DeepExploration.vue')
                },
                {
                    path: '/1',
                    component: () => import('@/components/charts/Question6Chart.vue')
                },
                {
                    path: '/2',
                    component: () => import('@/components/charts/Question7Chart.vue')
                }
            ]
        }
    ]
})

export default router
