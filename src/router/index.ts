import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/Home.vue'
import Read from '../page/Read.vue'
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    { path: "/", redirect: "/home" },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/read",
      name: "read",
      component: Read
    }
  ]
  
  export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
  })