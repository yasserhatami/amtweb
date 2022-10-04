import { createRouter,createWebHistory  } from "vue-router";
import home from './components/VueHome.vue'
import user from './pages/VueUser'
import category from './pages/category/VueIndex'
import categorycreate from './pages/category/VueCreate'
import createblog from './pages/blog/CreateBlog'
import blogs from './pages/blog/VueIndex'
import Vue_id from './pages/blog/Vue_id'

const routes = [
    {path : '/' , component : home},
    {path : '/user' , component : user},
    {path : '/category' , component : category},
    {path : '/category/createcategory' , component : categorycreate},
    {path : '/createblog' , component : createblog},
    {path : '/blogs' , component : blogs},
    {path : '/blog/:id' , component : Vue_id ,props: true},
]

const router = createRouter({
    history : createWebHistory(),
    routes,
})

export default router