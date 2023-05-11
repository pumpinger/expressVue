import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
            keepAlive: false,
            requireAuth: false
        },
        component: () => import('@/web/pages/login.vue')
    },
    {
        path: '/user',
        name: 'User',
        meta: {
            title: '用户列表',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@/web/pages/user.vue')
    },
    {
        path: '/',
        name: 'Index',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/web/pages/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});


export default router;
