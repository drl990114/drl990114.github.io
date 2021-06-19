const themeConfig = require('./config/themeConfig.js');
module.exports = {
  theme: require.resolve('../../theme-deeply'), // 使用本地主题

  title: "RuiLin Dong's blog",
  description: 'web前端技术博客,简洁至上,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github等技术文章。',
  // base: '/', // 格式：'/<仓库名>/'，必需项
  base: '/vuepress-theme-deeply/',
  markdown: {
    lineNumbers: false, // 代码行号
  },
  displayAllHeaders: true,
  activeHeaderLinks: false, // 默认值：true
  themeConfig,
  plugins: {
    '@vssue/vuepress-plugin-vssue': {
      // 设置 `platform` 而不是 `api`
      platform: 'github',

      // 其他的 Vssue 配置
      owner: 'halodong',
      repo: 'vuepress-theme-deeply',
      clientId: '612c892c769627382be8',
      clientSecret: '61e933f88b95f35e462f27243ea3dce33b6bfac9',
      locale: 'zh'
    },
  },

}
