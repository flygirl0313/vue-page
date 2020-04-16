import Vue from 'vue';
import Router from 'vue-router';
import commonRouter from './common';  // @代表的src别名
import loveRouter from './loveRouter';

Vue.use(Router);

// 
/**
 * 为防止页面过多，对页面路由就行了模块拆分
 * 新增路由: 如下 index.
 * 
 * 新增路由模块: 
 * import RouterMoudleName from './routerName'
 * routes: [...RouterMoudleName] (...为数组展开符号)
 * 
 * 浏览器path路径访问
 */
export default new Router({
    routes: [
        {
            path: '/index',
            name: 'index',
            component: () => import('@/pages/index')
        },
        ...commonRouter,
        ...loveRouter
    ]
});
