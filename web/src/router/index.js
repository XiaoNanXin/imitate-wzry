import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Article from '../views/Article.vue'
import Hero from '../views/Hero.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children:[
      {path:'',component:Home},
      {path:'articles/:id',component:Article,props: true}
    ]
  },
  {
    path:'/heroes/:id',
    name:"hero",
    component:Hero,
    props:true
  }
]

const router = new VueRouter({
  routes
})

export default router
