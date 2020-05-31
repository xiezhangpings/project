import Vue from 'vue'
import App from './App.vue'
import '../src/utlis/rem'
// 引入mock
import './mock/mockServer'
//vant
import { Col, Row, Search, Tabs, Tab, Swipe, SwipeItem, Grid, GridItem, Tabbar, TabbarItem } from 'vant';
Vue.use(Col).use(Row).use(Search).use(Tabs).use(Tab).use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(Tabbar).use(TabbarItem);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
