import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/Home/Home.vue'
import Read from '../page/Home/Read.vue'
import Welcome from '../page/Welcome.vue'
import About from '../page/About.vue'
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    { path: "/", redirect: "/welcome" },
    {
      path: "/home",
      children:[
        {
          path: "/home/read",
          name: "read",
          component: Read
        },
      ],
      component: Home,
      
    },
    {
      path: "/welcome",
      name: "welcome",
      component: Welcome
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
  
  export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
  })