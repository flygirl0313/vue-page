/**
 * 配置页面路由
 * exmple: [{
 *   path: 页面路径
 *   name: 页面名称
 *   页面组件来源: 对应相应文件（@代表src）
 * }..]
 */
const commonRouter = [
    {
        path: '/helloworld', // 路径
        name: 'lovePag', //name 
        component: () => import('@/pages/common/helloWorld')  // 页面来源
    }];

export default commonRouter;