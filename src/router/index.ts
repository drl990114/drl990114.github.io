import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Read from '../views/Read.vue'
import Welcome from '../views/Welcome.vue'
import About from '../views/About.vue'
import Login from '../views/admin/Login.vue'
import ShowData from '../views/ShowData.vue'
import Write from "../views/Write.vue"
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
    path: "/showdata",
    name: "showdata",
    component: ShowData
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
   {
    path: "/write",
    name: "write",
    component: Write
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})