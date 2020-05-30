<template>
  <div class="header">
    <div class="header-toplfet">
      <div>
        <img src="./image/log.webp" alt />
      </div>
    </div>
    <div class="haeder-search">
      <i></i>
      <input type="text" placeholder="搜索商品" />
    </div>
    <div class="haeder-btn">
      <button>登录</button>
    </div>
    <van-tabs>
      <van-tab v-for="index in 8" :title="'标签 ' + index">内容 {{ index }}</van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from 'vue'
import { Tab, Tabs } from 'vant'
Vue.use(Tab)
Vue.use(Tabs)
export default {
  name: 'Header'
}
</script>
<style scoped lang="stylus">
.header
  width 667px
  height 100px
  margin 10px
  display flex
  .header-toplfet
    img
      margin-right 10px
      width 80px
      height 30px
  .haeder-btn
    margin-left 10px
    button
      font-size 16px
</style>
