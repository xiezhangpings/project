<template>
  <van-tabbar
    v-model="active"
    class="footer_guide"
    active-color="#c0392b"
    inactive-color="#000"
    route
  >
    <van-tabbar-item name="home" icon="home-o" replace to="/home">首页</van-tabbar-item>
    <van-tabbar-item name="category" icon="search" replace to="/category">分类</van-tabbar-item>
    <van-tabbar-item name="buy" icon="friends-o" replace to="/buy">值得买</van-tabbar-item>
    <van-tabbar-item name="carBuy" icon="setting-o" replace to="/carBuy">购物车</van-tabbar-item>
    <van-tabbar-item name="self" icon="setting-o" replace to="/self">个人</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  name: 'Tabbars',
  data() {
    return {
      active: 'home'
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.footer_guide
  width 100%
  height 50px
  position fixed
  bottom 0
</style>


