var express = require('express');
var router = express.Router();
var UserModel = require('../model/userModel')
var blogModel = require('../model/blogModel')
const md5 = require('blueimp-md5')

//用户相关
// 用户登陆
router.post('/login', (req, res) => {
  const { username, password } = req.body
  // 根据username和password查询数据库users, 如果没有, 返回提示错误的信息, 如果有, 返回登陆成功信息(包含user)
  UserModel.findOne({ username, password: md5(password) })
    .then(user => {
      if (user) { // 登陆成功
        // 生成一个cookie(userid: user._id), 并交给浏览器保存
        res.cookie('userid', user._id, { maxAge: 1000 * 60 * 60 * 24 })
        if (user.role_id) {
          RoleModel.findOne({ _id: user.role_id })
            .then(role => {
              user._doc.role = role
              console.log('role user', user)
              res.send({ status: 0, data: user })
            })
        } else {
          user._doc.role = { menus: [] }
          // 返回登陆成功信息(包含user)
          res.send({ status: 0, data: user })
        }

      } else {// 登陆失败
        res.send({ status: 1, msg: '用户名或密码不正确!' })
      }
    })
    .catch(error => {
      console.error('登陆异常', error)
      res.send({ status: 1, msg: '登陆异常, 请重新尝试' })
    })
})

// 用户注册
router.post('/manage/user/add', (req, res) => {
  // 读取请求参数数据
  const { username, password } = req.body
  // 处理: 判断用户是否已经存在, 如果存在, 返回提示错误的信息, 如果不存在, 保存
  // 查询(根据username)
  UserModel.findOne({ username })
    .then(user => {
      // 如果user有值(已存在)
      if (user) {
        // 返回提示错误的信息
        res.send({ status: 1, msg: '此用户已存在' })
        return new Promise(() => {
        })
      } else { // 没值(不存在)
        // 保存
        return UserModel.create({ ...req.body, password: md5(password || '123456') })
      }
    })
    .then(user => {
      // 返回包含user的json数据
      res.send({ status: 0, data: user })
    })
    .catch(error => {
      console.error('注册异常', error)
      res.send({ status: 1, msg: '添加用户异常, 请重新尝试' })
    })
})
//根据用户id查找用户信息
router.post('/manage/user/find', (req, res) => {
  const { userId } = req.body
  UserModel.findOne({ _id: userId })
    .then(user => {

      res.send({ status: 0, data: user })
    })
    .catch(error => {
      console.error('更新用户异常', error)
      res.send({ status: 1, msg: '更新用户异常, 请重新尝试' })
    })
})

// 更新用户信息
router.post('/manage/user/update', (req, res) => {
  const user = req.body
  UserModel.findOneAndUpdate({ _id: user._id }, user)
    .then(oldUser => {
      const data = Object.assign(oldUser, user)
      // 返回
      res.send({ status: 0, data })
    })
    .catch(error => {
      console.error('更新用户异常', error)
      res.send({ status: 1, msg: '更新用户异常, 请重新尝试' })
    })
})

// 删除用户(注销)
router.post('/manage/user/delete', (req, res) => {
  const { userId } = req.body
  UserModel.deleteOne({ _id: userId })
    .then((doc) => {
      res.send({ status: 0 })
    })
})



//文章相关
//添加文章
router.post('/manage/blog/add', (req, res) => {
  const blog = req.body
  blogModel.create(blog)
    .then(blog => {
      res.send({ status: 0, data: blog })
    })
    .catch(error => {
      console.error('添加文章异常', error)
      res.send({ status: 1, msg: '添加文章异常, 请重新尝试' })
    })
})


// 更新文章
router.post('/manage/blog/update', (req, res) => {
  const blog = req.body
  blogModel.findOneAndUpdate({ _id: blog._id }, blog)
    .then(blog => {
      return blog
    })
    .catch(error => {
      console.error('更新文章异常', error)
      res.send({ status: 1, msg: '更新文章异常, 请重新尝试' })
    })

  res.send({ status: 0, data: poetry })
})

// 删除文章
router.post('/manage/blog/delete', (req, res) => {
  const { articleId } = req.body
  blogModel.deleteOne({ _id: articleId })
    .then((doc) => {
      res.send({ status: 0 })
    })
})

//根据文章内容搜索文章
router.get('/manage/blog/search', (req, res) => {
  const { desc } = req.query

  const descRegExp = new RegExp(desc);

  blogModel.find({ desc: descRegExp })
    .then(blog => {
      res.send({ status: 0, data: blog })
    })
    .catch(error => {
      console.error('搜索文章列表异常', error)
      res.send({ status: 1, msg: '搜索文章列表异常, 请重新尝试' })
    })
})

//根据文章ID搜索文章
router.get('/manage/blog/detail', (req, res) => {
  const { articleId } = req.query
  const id = { _id: articleId }
  blogModel.findOne(id)
    .then(blog => {
      res.send({ status: 0, data: blog })
    })
    .catch(error => {
      console.error('搜索文章列表异常', error)
      res.send({ status: 1, msg: '搜索文章列表异常, 请重新尝试' })
    })
})

//根据收藏数组搜索文章
// router.post('/manage/poetry/favorite', async (req, res) => {
//   const { favArr } = req.body
//   let arr = []
//   for (let i = 0; i < favArr.length; i++) {

//     let req = await poetryModel.findOne({ _id: favArr[i] })
//     arr.push(req)
//   }
//   res.send({ status: 0, data: arr })
// })

//获得所有文章
router.get('/manage/blog/all', (req, res) => {
  const { pageNum, pageSize } = req.query
  blogModel.find()
    .then(blog => {
      res.send({ status: 0, data: pageFilter(blog, pageNum, pageSize) })
    })
    .catch(error => {
      console.error('搜索文章列表异常', error)
      res.send({ status: 1, msg: '搜索文章列表异常, 请重新尝试' })
    })
})
//删除某篇文章
router.get('/manage/blog/delete', (req, res) => {
  const { _id } = req.query
  blogModel.deleteOne(_id)
    .then(blog => {
      res.send({ status: 0, data: blog })
    })
    .catch(error => {
      console.error('搜索文章列表异常', error)
      res.send({ status: 1, msg: '搜索文章列表异常, 请重新尝试' })
    })
})


//根据用户id获取文章
// router.post('/manage/poetry/my', (req, res) => {
//   const { authorId } = req.query
//   poetryModel.find(authorId)
//     .then(poetry => {
//       res.send({ status: 0, data: poetry })
//     })
//     .catch(error => {
//       console.error('搜索文章列表异常', error)
//       res.send({ status: 1, msg: '搜索文章列表异常, 请重新尝试' })
//     })
// })



/*
得到指定数组的分页信息对象
 */
function pageFilter(arr, pageNum, pageSize) {
  pageNum = pageNum * 1
  pageSize = pageSize * 1
  const total = arr.length
  const pages = Math.floor((total + pageSize - 1) / pageSize)
  const start = pageSize * (pageNum - 1)
  const end = start + pageSize <= total ? start + pageSize : total
  const list = []
  for (var i = start; i < end; i++) {
    list.push(arr[i])
  }

  return {
    pageNum,
    total,
    pages,
    pageSize,
    list
  }
}
require('./file-upload')(router)
module.exports = router;
