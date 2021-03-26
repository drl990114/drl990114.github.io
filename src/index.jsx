import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import memory from './utils/memory'
import storage from './utils/storage'
import { HashRouter } from 'react-router-dom'


//打开页面前读取local
const user = storage.getUser()
const id = storage.getId()
if (user) { memory.user = user }
if (id) { memory.id = id }



ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

