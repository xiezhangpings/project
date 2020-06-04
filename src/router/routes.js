// 引入组件
import Buy from '../pages/Buy'
import Category from '../pages/Category'
import Home from '../pages/Home'
import Self from '../pages/Self'
import carBuy from '../pages/carBuy'
import Ccc from '../pages/Category/ccc/ccc.vue'

export default [
  // 首页
  {
    path: '/home',
    component: Home
  },
  // 值得买
  {
    path: '/buy',
    component: Buy
  },
  // 分类
  {
    path: '/category/:category?',
    component: Category,
    children:[
      {
        name: 'ccc',
        path: '/ccc',
        component: Ccc
      }
    ]
  },
  // 个人
  {
    path: '/self',
    component: Self
  },
  // 购物车
  {
    path: '/carBuy',
    component: carBuy
  },
  // 重定向
  {
    path: '/',
    redirect: '/home'
  }
]