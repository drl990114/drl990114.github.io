// const headNav = require("./head.js")
// 主题配置
module.exports = {
  author: "RuiLin Dong", //作者名
  avatar: '/img/头像.jpg', // 头像
  search: true,
  repo: '', // 导航栏右侧生成Github链接
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
  docsDir: 'docs', // 编辑的文件夹
  introduction: '一名热爱前端的程序员，我喜欢编程、音乐、各种棋类，希望和你交个朋友。',
  search: true,
  algolia: {
    apiKey: '6956f18773dbf5757dc4f3a3c375222d',
    indexName: 'dev_blog'
  },
  headNav: [
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
      link: "/friend/"
    }
  ],
  recommend: {
    link: '/read/2021011201',
    title: '如何封装自己的react hooks',
    time: '2021-6-15',
    more: 'useEffect可以看作是componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。useEffect 钩子在组件初始化完毕时，一定会执行一次，在组件重新渲染的过程中，是否还要 update，还要看传入的第 2 个参数。当只有回调函数这一个参数时，组件的每次更新，回调都会执行；当有 2 个参数时，只有第 2 参数里的数据发生变化时，回调才执行；只想在组件初始化完毕时只执行一次，第 2 个参数可以传入一个空的数组'
  },
  foot: {
      year:'2021',
      record:'',
  },
  about: {
    introduction:''
  }
}
