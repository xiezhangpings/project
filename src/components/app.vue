<template>
  <div>
    <van-row>
      <van-col>
        <img class="logo" src="./image/log.webp" />
      </van-col>
      <van-col>
        <van-search class="header-search" v-model="input" placeholder="请输入搜索关键词" />
      </van-col>
      <van-col>
        <div class="logobtn">登录</div>
      </van-col>
    </van-row>
    <!--nav导航-->
    <van-tabs>
      <van-tab v-for="(navList,index) in navList" :key="index" :title="navList">
        <!--内容 {{ navList }}-->
      </van-tab>
    </van-tabs>
    <!--轮播图-->
    <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
      <van-swipe-item>
        <img src="./image/1.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="./image/2.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="./image/3.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="./image/4.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="./image/5.jpg" />
      </van-swipe-item>
    </van-swipe>
    <!--文字-->
    <van-row class="cenitem">
      <van-col span="8">
        <i class="icon">
          <img src="./image/ia_100000059.png" />
        </i>
        <span>网易自营品牌</span>
      </van-col>
      <van-col span="8">
        <i class="icon">
          <img src="./image/ia_100000060.png" />
        </i>
        <span>30天无忧退货</span>
      </van-col>
      <van-col span="8">
        <i class="icon">
          <img src="./image/ia_100000061.png" />
        </i>
        <span>48小时快速退款</span>
      </van-col>
    </van-row>
    <!-- 列表 -->
    <!-- <van-grid :column-num="5" :border="false" icon-size="6px">
      <van-grid-item v-for="(n,index) in goodsList" :key="index">
        <img :src="n.imgurl" />
        <div>{{n.goodtext}}</div>
      </van-grid-item>
    </van-grid>-->
    <!-- <van-grid :column-num=2 direction="vertical">
  <van-grid-item v-for="(n,index) in goodsList" :key=index :icon="n.imgurl" :text="n.goodtext" />
    </van-grid>-->
    <van-grid :column-num="5" :border="false" icon-size=".6rem" :gutter="1" class="grid">
      <van-grid-item
        v-for="(n,index) in goodsList"
        :key="index"
        :icon="n.imgurl"
        :text="n.goodtext"
      />
    </van-grid>
    <!--底部按钮-->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search" dot>分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o" badge="5">值得买</van-tabbar-item>
      <van-tabbar-item icon="setting-o" badge="20">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o" badge="20">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
// import BScroll from 'better-scroll'
export default {
  name: 'app',
  data() {
    return {
      input: '',
      navList: [
        '推荐',
        '居家生活',
        '服饰鞋包',
        '美食酒水',
        '个护清洁',
        '母婴亲子',
        '运动流行',
        '数码家电',
        '严选全球'
      ],
      goodsList: [
        {
          imgurl: require('../components/image/liebiao1.png'),
          goodtext: '新品首发'
        },
        {
          imgurl: require('../components/image/liebiao2.png'),
          goodtext: '居家生活'
        },
        {
          imgurl: require('../components/image/liebiao3.png'),
          goodtext: '服饰鞋包'
        },
        {
          imgurl: require('../components/image/liebiao4.png'),
          goodtext: '美食酒水'
        },
        {
          imgurl: require('../components/image/liebiao5.png'),
          goodtext: '个护清洁'
        },
        {
          imgurl: require('../components/image/liebiao6.png'),
          goodtext: '母婴亲子'
        },
        {
          imgurl: require('../components/image/liebiao7.png'),
          goodtext: '运动旅行'
        },
        {
          imgurl: require('../components/image/liebiao8.png'),
          goodtext: '数码家电'
        },
        {
          imgurl: require('../components/image/liebiao9.png'),
          goodtext: '全球特色'
        },
        {
          imgurl: require('../components/image/liebiao10.gif'),
          goodtext: '好货抄底'
        }
      ],
      active:''
    }
  },
  methods: {}
}
</script>
<style scoped lang="stylus">
.logo
  width 80px
  display inline-block
  margin 15px 0 0 15px
.header-search
  width 210px
  border-radius 15px
// margin 10px 0 0 30px
.logobtn
  width 40px
  height 30px
  border 1px solid #f00
  color #f00
  margin 10px 0 0 10px
  line-height 30px
  text-align center
  font-size 12px
  border-radius 10px
.my-swipe
  img
    width 100%
    height 150px
.cenitem
  text-align center
  height 10px
  margin-top 5px
  font-size 12px
  line-height 10px
.cenitem i.icon
  margin-right 5px
  vertical-align middle
.cenitem i.icon img
  width 15px
  height 15px
.grid
  width 100%
.grid .van-grid-item
  width 50px
</style>
