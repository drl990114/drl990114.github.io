import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/Home.vue'
import Read from '../page/Read.vue'
import Welcome from '../page/Welcome.vue'
import About from '../page/About.vue'
import Login from '../page/admin/Login.vue'
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  { path: "/", redirect: "/welcome" },
  {
    path: "/home",
    name: "home",
    component: Home,

  },
  {
    path: "/read",
    name: "read",
    component: Read
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
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})