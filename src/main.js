import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import Tabbars from '../src/components/Tabbars.vue'
import '../src/util/rem'
// 引入mock
import './mock/mockServer'
//引入api
import './api/inde1x'
//vant
import { Col, Row, Search, Tabs, Tab, Swipe, SwipeItem, Grid, GridItem, Tabbar, TabbarItem, Button, Sticky,Sidebar, SidebarItem } from 'vant';
// 注册成全局组件
Vue.component(Tabbars.name, Tabbars)
Vue.use(Col).use(Row).use(Search).use(Tabs).use(Tab).use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(Tabbar).use(TabbarItem).use(Button).use(Sticky).use(VueRouter).use(Sidebar).use(SidebarItem);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
