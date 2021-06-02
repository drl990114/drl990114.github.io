/*
能操作poetry集合数据的Model
 */
// 1.引入mongoose
const mongoose = require('mongoose')

// 2.字义Schema(描述文档结构)
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true }, // 名称
  authorId: { type: String, required: true },
  authorName: { type: String, required: true }, // 作者名
  classifyId: { type: String}, // 所属分类的id
  desc: { type: String },//文章内容
  imgs: { type: Array, default: [] }, // n个图片文件名的json字符串
  commentList : { type: Array, default: [] }, //文章评论
  createTime :{type: Number, default: Date.now},
})

 
// 3. 定义Model(与集合对应, 可以操作集合)
const blogModel = mongoose.model('blog', blogSchema)

// 4. 向外暴露Model
module.exports = blogModel