import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory
} from 'vue-router'


const pages = import.meta.glob('./pages/*.vue')

const routes = Object.keys(pages).map((path:any) => {
  const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase()
  return {
    path: name === '/welcome' ? '/' : name,
    component: pages[path] // () => import('./pages/*.vue')
  }
})
// 
export function createRouter() {
  return _createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes
  })
}



// const routes = [
  //   { path: "/", redirect: "/welcome" },
  //   {
  //     path: "/blog",
  //     name: "blog",
  //     component:  () => import('./pages/Blog.vue'),
  
  //   },
  //   {
  //     path: "/read",
  //     name: "read",
  //     component:  () => import('./pages/Read.vue')
  //   },
  //   {
  //     path: "/welcome",
  //     name: "welcome",
  //     component:  () => import('./pages/Welcome.vue')
  //   },
  //   {
  //     path: "/about",
  //     name: "about",
  //     component:  () => import('./pages/About.vue')
  //   },
  //   {
  //     path: "/showdata",
  //     name: "showdata",
  //     component:  () => import('./pages/ShowData.vue')
  //   },
  //   {
  //     path: "/login",
  //     name: "login",
  //     component:  () => import('./pages/admin/Login.vue')
  //   },
  //    {
  //     path: "/write",
  //     name: "write",
  //     component:  () => import('./pages/Write.vue')
  //   }
  // ]