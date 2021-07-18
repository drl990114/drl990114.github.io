
// 主题配置
module.exports = {
  author: "RuiLin Dong", //作者名
  avatar: '/img/头像.jpg', // 头像
  bgSound: '/sound/bgm.mp3',//网站背景音乐路径，开关在博客底部点击小猴子头像
  location: '浙江杭州', //地点
  repo: 'https://github.com/halodong/vuepress-theme-deeply', // 生成文章编辑链接
  branch: 'master',//文章的 github 分支

  lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
  docsDir: 'docs', // 编辑的文件夹
  introduction: '一名热爱前端的程序员，我喜欢编程、音乐、各种棋类，希望和你交个朋友。',
  search: true,
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  searchPlaceholder: '站内搜索',
  algolia: {
    apiKey: '6956f18773dbf5757dc4f3a3c375222d',
    indexName: 'dev_blog'
  },
  copyright: {
    version: '版权声明: 知识共享署名 4.0 国际许可协议',
    link: {
      name: 'CC BY-NC-ND 4.0',
      url: 'http://creativecommons.org/licenses/by/4.0/'
    }
  },
  headNav: [
    //所有页面中，导航下拉菜单
    {
      label: '博客',
      link: "/home/"
    },
    {
      label: '关于我',
      link: "/about/"
    },
    {
      label: '友情链接',
      link: "/blogroll/"
    }
  ],
  recommend: {
    //首页推荐文章信息
    link: '/read/2021061601',
    title: '新的开始，扬帆起航',
    time: '2021-6-16',
    more: `不知何时，我一直有冒过写博客的想法但却一直没有坚持，
    最近忙于公司业务上的需求，不断的在学习新的框架、新的知识，却一直没有总结，
    我是个喜欢反思的人，我意识到要赶紧行动起来，用博客来记录一些东西，并不局限于技术。
    这是一个新的开始，这里将记录我的生活和技术上的成长`
  },
  foot: {
    year: '2021',//网站创建年份
    record: '',//网站备案链接
  },
  about: {
    //关于页面的配置
    aboutMe: {
      //”关于我“的介绍
      introduction: `My name is RuiLin Dong(董瑞林). 
      You can call me RuiLin. I was born in 1999.
      I graduated from Baoji College of Arts and Sciences with a Bachelor of Engineering degree.
      Now I am working in a company as a front-end developer.Life is colorful, and this website was, is and will be a window to show the colors of my life.
      I like programming,reading, music.`

    },
    aboutWebsite: {
      //关于网站内容的介绍
      show: true,//false 则不显示此栏
      content: `
      所有文章非特别说明皆为原创。技术更迭迅猛，部分内容可能会作修改，为保证信息与源同步，
      转载时请务必注明文章出处！文章皆为个人观点，不代表所服务的公司。`
    },
    rss: {
      //rss订阅信息
      show: true,
      link: ''
    },
    social: [
      //社交网站链接，可以添加多个
      {
        label: 'github',
        name: '@halodong',
        link: 'https://github.com/halodong',
        className: 'icon-github'
      },
      {
        label: '知乎',
        name: 'zhihu',
        link: 'https://www.zhihu.com/people/drl-66',
        className: 'icon-zhihu'

      },
      {
        label: 'E-mail',
        name: 'drl1999@foxmail.com',
        link: 'https://www.foxmail.com',
        className: 'icon-youxiang1'
      },
    ],
    lastChange: '2021年6月15日' //about页面的最后更新时间

  },
  blogRoll: [
    //友情链接
    {
      name: '小胡子哥的个人网站',
      link: 'https://www.barretlee.com/',
      desc: '一眼就爱上的网站布局，内容也很干货'
    },
    {
      name: 'VuePress',
      link: 'https://vuepress.vuejs.org/zh/',
      desc: '一个很棒的博客框架！'
    }
  ],
  statistics: {
    baidu: "https://hm.baidu.com/hm.js?62d2c28ed48f158fc50c2a111bf89fcc"
  }
}
