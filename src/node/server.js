var express = require('express')
var app = express();

//使用中间件实现跨域请求
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");         //允许的来源
  res.header("Access-Control-Allow-Headers", "X-Requested-With");    //请求的头部
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");  //允许请求的方法
  res.header("X-Powered-By", "3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.get('/navList', function (req, res) {
  var navList = [
    '推荐',
    '居家生活',
    '服饰鞋包',
    '美食酒水',
    '个护清洁',
    '母婴亲子',
    '运动流行',
    '数码家电',
    '严选全球'
  ]
  res.send(navList);
});
app.get('/goodsList', function (req, res) {
  var goodsList = [
    {
      imgurl: ("../assets/image/liebiao1.png"),
      goodtext: '新品首发'
    },
    {
      imgurl: require('../assets/image/liebiao2.png'),
      goodtext: '居家生活'
    },
    {
      imgurl: require('../assets/image/liebiao3.png'),
      goodtext: '服饰鞋包'
    },
    {
      imgurl: require('../assets/image/liebiao4.png'),
      goodtext: '美食酒水'
    },
    {
      imgurl: require('../assets/image/liebiao5.png'),
      goodtext: '个护清洁'
    },
    {
      imgurl: require('../assets/image/liebiao6.png'),
      goodtext: '母婴亲子'
    },
    {
      imgurl: require('../assets/image/liebiao7.png'),
      goodtext: '运动旅行'
    },
    {
      imgurl: require('../assets/image/liebiao8.png'),
      goodtext: '数码家电'
    },
    {
      imgurl: require('../assets/image/liebiao9.png'),
      goodtext: '全球特色'
    },
    {
      imgurl: require('../assets/image/liebiao10.gif'),
      goodtext: '好货抄底'
    }
  ]
  res.send(goodsList);
});








app.listen(5632, function () {
  console.log("5632,服务器启动成功")
})