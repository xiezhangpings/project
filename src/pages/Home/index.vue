<template>
  <div>
    <van-sticky>
      <van-row style="background:#fff">
        <van-col>
          <img class="logo" src="../../assets/image/log.webp" />
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
    </van-sticky>
    <!--轮播图-->
    <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
      <van-swipe-item>
        <img src="../../assets/image/1.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/image/2.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/image/3.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/image/4.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/image/5.jpg" />
      </van-swipe-item>
    </van-swipe>
    <!--文字-->
    <van-row class="cenitem">
      <van-col span="8">
        <i class="icon">
          <img src="../../assets/image/ia_100000059.png" />
        </i>
        <span>网易自营品牌</span>
      </van-col>
      <van-col span="8">
        <i class="icon">
          <img src="../../assets/image/ia_100000060.png" />
        </i>
        <span>30天无忧退货</span>
      </van-col>
      <van-col span="8">
        <i class="icon">
          <img src="../../assets/image/ia_100000061.png" />
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
    <!--商品列表--->
    <div class="commodityList">
      <h1>
        <label>人气推荐</label>
        <a>更多 ></a>
      </h1>
      <van-grid :column-num="3" :border="false" icon-size=".6rem" :gutter="1" class="grid">
        <van-grid-item
          v-for="(n,index) in goodsList"
          :key="index"
          :icon="n.imgurl"
          :text="n.goodtext"
        />
      </van-grid>
    </div>
    <!--底部-->
    <div class="footer">
      <van-button class="foooter-button1" plain hairline type="default">下载APP</van-button>
      <van-button class="foooter-button1" plain hairline type="default">电脑版</van-button>
      <p class="foooter-p">
        网易公司版权所有 © 1997-
        <br />食品经营许可证：JY13301080111719
      </p>
    </div>
    <!--底部按钮-->
    <Tabbars></Tabbars>
  </div>
</template>
<script>
import axios from 'axios'
import Tabbars from '../../components/Tabbars'
// import BScroll from 'better-scroll'
export default {
  name: 'Home',
  data() {
    return {
      input: '',
      navList: '',
      goodsList: [
        {
          imgurl: require('../../assets/image/liebiao1.png'),
          goodtext: '新品首发'
        },
        {
          imgurl: require('../../assets/image/liebiao2.png'),
          goodtext: '居家生活'
        },
        {
          imgurl: require('../../assets/image/liebiao3.png'),
          goodtext: '服饰鞋包'
        },
        {
          imgurl: require('../../assets/image/liebiao4.png'),
          goodtext: '美食酒水'
        },
        {
          imgurl: require('../../assets/image/liebiao5.png'),
          goodtext: '个护清洁'
        },
        {
          imgurl: require('../../assets/image/liebiao6.png'),
          goodtext: '母婴亲子'
        },
        {
          imgurl: require('../../assets/image/liebiao7.png'),
          goodtext: '运动旅行'
        },
        {
          imgurl: require('../../assets/image/liebiao8.png'),
          goodtext: '数码家电'
        },
        {
          imgurl: require('../../assets/image/liebiao9.png'),
          goodtext: '全球特色'
        },
        {
          imgurl: require('../../assets/image/liebiao10.gif'),
          goodtext: '好货抄底'
        }
      ],
      active: ''
    }
  },
  components:{
    Tabbars
  },
  created() {
    axios.get('http://localhost:5632/navList').then(d => {
      this.navList = d.data
    })
    // axios.get('http://localhost:5632/goodsList').then(a => {
    //   this.goodsList = a.data
    // })
  }
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
  padding 0
.grid .van-grid-item
  width 50px
.commodityList
  clear both
  margin 5px
.commodityList h1
  display block
  clear both
  margin 5px
  height 20px
.commodityList h1 label
  float left
  font-size 16px
.commodityList h1 a
  float right
  font-size 16px
.footer
  border-top 10px solid rgba(0, 0, 0, 0.15)
  width 100%
  height 200px
  background #666
  .foooter-button1
    background #666
    text-align center
    margin 20px 50px 20px 50px
  .foooter-p
    font-size 12px
    text-align center
</style>
