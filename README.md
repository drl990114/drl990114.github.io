# React技术栈 诗者

## 项目简介
### 技术栈
基于 `react` + `react-router` +  `axios` + `ant design` + `nodejs` + `Express` +`mongodb` 等开发的一款PC端Web项目，这是一个可以自由写诗，并且相互交流的网站。

## 预览地址
- 😋 项目在线预览地址：[点击预览](http://47.119.125.145:5000/)

## 最近更新
### 更新功能
- 登录功能：
  - 支持游客浏览
- 诗列表：
  - 后端对列表进行分页
  - 点击加载更多
- 搜索框：
  - 增加显示搜索到的条数
- 点赞、收藏、评论

### TO-DO-LIST（可能会开发）
- 独立登录功能
  - 登录的信息保存在独立的服务器当中，便以后续扩展
- 头像功能
  - 用户可以自定义头像
- 社区（私信功能）  
  - 可以给作者私信

## 界面和功能展示
### 首页

![](https://cdn.jsdelivr.net/gh/halodong/CDN@1.4/cloudPic/shizhe/首页.PNG)
### 登陆

![](https://cdn.jsdelivr.net/gh/halodong/CDN@1.4/cloudPic/shizhe/登陆.PNG)

### 详情

![](https://cdn.jsdelivr.net/gh/halodong/CDN@1.4/cloudPic/shizhe/详情.PNG)

### 点赞、收藏、评论

![](https://cdn.jsdelivr.net/gh/halodong/CDN@1.4/cloudPic/shizhe/赞收藏.PNG)


### 编辑

![](https://cdn.jsdelivr.net/gh/halodong/CDN@1.4/cloudPic/shizhe/编辑.PNG)

### 搜索

![](https://cdn.jsdelivr.net/gh/halodong/CDN@1.4/cloudPic/shizhe/搜索.PNG)

### 个人主页

![](https://cdn.jsdelivr.net/gh/halodong/CDN@1.4/cloudPic/shizhe/个人.PNG)

## 技术栈

### 前端

- `React`：用于构建用户界面的 `MVVM` 框架
- `axios`: 发送网络请求，请求拦截和响应拦截
- `react-router`：为单页面应用提供的路由系统
- `propType`: 校验`props`类型及默认值
- 项目中的优化: 路由懒加载、函数防抖

### 后端

- `Node.js`：利用 `Express` 搭建的本地测试服务器
- `axios`：用来请求后端 `API` 音乐数据
- `mongodb`: 用来搭建数据库
- `mongoose`: 简化node操作mongodb的步骤
- 项目中的优化：诗列表分页

### 其他工具

- create-react-app：React 脚手架工具，快速初始化项目代码
- eslint：代码风格检查工具，帮助我们规范代码书写

## 最后
如果觉得项目还不错的话 👏，就给个 star ⭐ 鼓励一下吧~