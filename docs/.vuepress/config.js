const themeConfig = require('./config/themeConfig.js');
module.exports = {
  theme: require.resolve('../../theme-deeply'), // 使用本地主题
  head: [
    [
      'link',
      { rel: 'icon', href: '/img/favicon.ico' }
    ]
  ],
  title: "RuiLin Dong's blog",
  description: 'web前端技术博客,专注web前端学习与总结。JavaScript,ES6,TypeScript,React,Vue,css3,html5,Node等技术文章。',
  // base: '/', // 格式：'/<仓库名>/'，必需项
  base: '/',
  markdown: {
    lineNumbers: false, // 代码行号
  },
  themeConfig,
  plugins: {
    '@vssue/vuepress-plugin-vssue': {
      // 设置 `platform` 而不是 `api`
      platform: 'github',

      // 其他的 Vssue 配置
      owner: 'halodong',
      repo: 'halodong.github.io',
      clientId: '612c892c769627382be8', //GitHub page
      clientSecret: '61e933f88b95f35e462f27243ea3dce33b6bfac9',
      //       clientId: '4185e1a31e80d0b76772', //本地
      //       clientSecret: '95eed2195d27127a5e5401dd91d20b6de26fdf39',
      locale: 'zh'
    },
  },

}
