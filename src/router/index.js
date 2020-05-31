import Vue from 'vue'
import Router from 'vue-router'
import app from '../components/app.vue'
Vue.use(Router)
export default new Router({
  router: [
    {
      path: '/',
      name: 'app',
      component: app
    }
  ]
})