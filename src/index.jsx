import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import memory from './utils/memory'
import storage  from './utils/storage'
import { BrowserRouter  } from 'react-router-dom'


//打开页面前读取local
const user = storage.getUser()
const id = storage.getId()
memory.user = user
memory.id = id



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

