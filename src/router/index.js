import Vue from 'vue';
import Router from 'vue-router';

// 重写方法防止点击报错
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

Vue.use(Router);

import Layout from '@/layout/Index';
const routes = [
    {
        id: 'default',
        path: '/',        
        redirect: '/dashboard',
        component: Layout,
        children: [
            {   
                id: 'dashboard',
                path: '/dashboard',
                icon: 'icon-shouye',
                name: '控制台',
                component: () => import('@/views/dashboard/index')
            },
            {
                id: 'tableIndex',
                path: '/table',
                icon: 'icon-biaoge1',
                redirect: '/table/base',
                name: '表格',
                component: () => import('@/views/table/index'),
                children: [
                    {
                        id: 'baseTable',
                        path: '/table/base',
                        name: '基础表格',
                        component: () => import('@/views/table/base')
                    },
                    {
                        id: 'searchTable',
                        path: '/table/search',
                        name: '查询表格',
                        component: () => import('@/views/table/search')
                    }
                ]
            },
            {
                id: 'formIndex',
                path: '/form',
                icon: 'icon-biaoge1',
                redirect: '/form/base',
                name: '表单',
                component: () => import('@/views/table/index'),
                children: [
                    {
                        id: 'baseTable',
                        path: '/table/base',
                        name: '基础表单',
                        component: () => import('@/views/table/base')
                    },
                    {
                        id: 'searchTable',
                        path: '/table/search',
                        name: '高级表单',
                        component: () => import('@/views/table/search')
                    }
                ]
            }
        ]
    }
];

export default new Router({
    routes
});