<template>
  <div id="cartContainer">
    <!-- 头部 -->
    <div class="cartHeader">
      <span class="leftTxt">购物车</span>
      <span class="rightTxt">领券</span>
    </div>
    <!-- 主要内容 -->
    <div class="cartContent">
      <div class="server">
        <ul>
          <li>
            <span>30天无忧退货</span>
          </li>
          <li>
            <span>48小时快速退款</span>
          </li>
          <li>
            <span>满99元免邮费</span>
          </li>
        </ul>
      </div>
      <div class="login">
        <div class="cartBg"></div>
        <div class="loginBtn">
          <span>去添加点什么吧</span>
          <div class="login" @click="goPersonal('/personal')">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goPersonal(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#cartContainer
  width 100%
  // 头部
  .cartHeader
    display flex
    justify-content space-between
    width 100%
    height 60px
    line-height 60px
    padding 0 30px
    box-sizing border-box
    .leftTxt
      font-size 20px
      color #333
    .rightTxt
      // margin-right 25px
      font-size 20px
      color red
  // 主要内容
  .cartContent
    width 100%
    .server
      font-size 12px
      width 100%
      height 40px
      line-height 40px
      background-color #eee
      padding 0 30px
      box-sizing border-box
      ul
        display flex
        justify-content space-between
        width 100%
        height 100%
        li
          width 33%
          height 100%
          color #666
          text-align center
    // 登录
    .login
      width 100%
      position absolute
      left 50%
      transform translateX(-50%)
      top 200px
      .cartBg
        width 248px
        height 248px
        margin 0 auto
        background url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp') no-repeat
        background-size cover
      .loginBtn
        width 100%
        text-align center
        >span
          font-size 20px
          color #999
        .login
          width 200px
          height 50px
          line-height 50px
          background-color #DD1A21
          margin 50px auto 0
          font-size 20px
          color #fff
</style>
