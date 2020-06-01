<template>
  <div>
    <van-tabbar v-model="active" :route="true">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item to="/category" icon="search" dot>标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" badge="5">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o" badge="20">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'footerbar',
  data() {
    return {
      active: 0
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
</style>