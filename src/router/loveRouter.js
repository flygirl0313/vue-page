/**
 * 配置页面路由
 * exmple: [{
 *   path: 页面路径
 *   name: 页面名称
 *   页面组件来源: 对应相应文件（@代表src）
 * }..]
 */
const loveRouter = [
    {
        path: '/love/lovePage', // 路径
        name: 'lovePag', //name 
        component: () => import('@/pages/love/lovePage')  // 页面来源
    },
    {
        path: '/love/lovesweetPage',
        name: 'sweetPag',
        component: () => import('@/pages/love/sweetPage')
    }];

export default loveRouter;