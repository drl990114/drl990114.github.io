/*
进行local数据存储管理的工具模块
 */
import store from 'store'
const USER_KEY = 'user_key'
const USER_ID = '_id'
let storage = {
  /*
  保存user
   */
  saveUser (user , id) {
    // localStorage.setItem(USER_KEY, JSON.stringify(user))
    store.set(USER_KEY, user)
    store.set(USER_ID, id)
  },

  /*
  读取user
   */
  getUser () {
    // return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
    return store.get(USER_KEY) || ''
  },

  getId () {
    // return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
    return store.get(USER_ID ) || ''
  },

  /*
  删除user
   */
  removeUser () {
    // localStorage.removeItem(USER_KEY)
    store.remove(USER_KEY , USER_ID)
  }
}

export default storage