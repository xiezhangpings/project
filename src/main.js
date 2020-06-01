import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../src/utlis/rem'
// 引入mock
import './mock/mockServer'
//引入api
import './api/index'
//vant
import { Col, Row, Search, Tabs, Tab, Swipe, SwipeItem, Grid, GridItem, Tabbar, TabbarItem, Button, Sticky } from 'vant';
Vue.use(Col).use(Row).use(Search).use(Tabs).use(Tab).use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(Tabbar).use(TabbarItem).use(Button).use(Sticky);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
