import Vue from 'vue'
import Router from 'vue-router'
// import TextDemo from '@/components/TextDemo'
import App from '@/App'

Vue.use(Router)

export default new Router({
  routes: [{path: './App',
    name: 'App',
    component: App
  },
  {
    path: '*',
    redirect: './App'
  }
  ]
})
