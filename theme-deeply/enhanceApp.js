const fs = require('fs'); // 文件模块
const path = require('path'); // 路径模块

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // const app =   Vue.creatApp();
  // VMdPreview.use(githubTheme);
  // window.Vue = vue // 使页面中可以使用Vue构造函数 （使页面中的vue demo生效）
  
  // search.start();
  console.log('siteData',siteData)
}
