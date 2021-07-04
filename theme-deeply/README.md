# vuepress-theme-deeply

vuepress-theme-deeply for vuepress

一个基于VuePress的 博客 主题。

可选配置：
```JavaScript
author: "RuiLin Dong", //作者名
  avatar: '/img/头像.jpg', // 头像
  bgSound: '/sound/bgm.mp3',//网站背景音乐路径，开关在博客底部点击小猴子头像
  location: '浙江杭州', //地点
  repo: '', // 导航栏右侧生成Github链接

  lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
  docsDir: 'docs', // 编辑的文件夹
  introduction: '一名热爱前端的程序员，我喜欢编程、音乐、各种棋类，希望和你交个朋友。',//首页自我介绍
  search: true,
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  searchPlaceholder: '站内搜索',//搜索框 placehoder
  headNav: [
    //所有页面中，导航下拉菜单
  ],
  recommend: {
    //首页推荐文章信息
  },
  foot: {
    year: '2021',//网站创建年份
    record: '',//网站备案链接
  },
  about: {
    //关于页面的配置
    aboutMe: {
      //”关于我“的介绍
    },
    aboutWebsite: {
      //关于网站内容的介绍
    },
    rss: {
      //rss订阅信息
    },
    social: [
      //社交网站链接，可以添加多个
    ],
    lastChange: '2021年6月15日' //about页面的最后更新时间
  },
  blogRoll: [
    //友情链接
  ],
  statistics: { 
    //百度推广 API
  }

```