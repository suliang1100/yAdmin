import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Layout from '@/layout/Index';
const routes = [
    {
        path: '/',
        name: '首页',
        icon: 'icon-shouye',
        redirect: '/dashboard',
        component: Layout,
        children: [
            {
                path: 'dashboard',
                name: '仪表盘',
                component: () => import('@/views/dashboard/index')
            }
        ]
    },
    {
        path: '/table',
        icon: 'icon-biaoge1',
        name: '表格',
        component: Layout,
        children: [
            {
                path: 'base',
                name: '基础表格',
                component: () => import('@/views/table/base')
            }
        ]
    }
];

export default new Router({
    routes
});