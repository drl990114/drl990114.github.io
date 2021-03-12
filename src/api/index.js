import ajax from './ajax'

//登陆请求
export const reqLogin = (username , password) => ajax('/login',{username ,password} , 'POST')

//用户注册
export const addUser = (username , password , email ) => ajax('/manage/user/add' , {username , password , email } ,'POST')

//根据id查找用户
export const getUser = (userId) => ajax('/manage/user/find' , {userId} ,'POST')

//更新用户信息
export const updateUser = (user) => ajax('/manage/user/update' , user , 'POST')
 
//获得所有文章
export const getArticle = (pageNum , pageSize) => ajax('/manage/poetry/all',{pageNum,pageSize},'GET')

//发布文章
export const publishArticle = (title , imgs , authorId ,authorName,desc) => ajax('/manage/poetry/add',{title , imgs , authorId ,authorName,desc},'POST')

//根据id查找文章
export const getOneArticle = (articleId) => ajax('/manage/poetry/detail',{articleId} , 'GET')

//根据文章id数组查找文章
export const getFavorite = (favArr) => ajax('/manage/poetry/favorite',{favArr} ,'POST')

//根据文章内容查找文章
export const searchDesc = (desc) => ajax('/manage/poetry/search', {desc} , 'GET')

//更新文章
export const updateArticle = (poetry) => ajax('/manage/poetry/update' ,poetry , 'POST' ) 

//根据id删除文章
export const deleteArticle = (articleId) => ajax('/manage/poetry/delete' , {articleId} , 'POST')