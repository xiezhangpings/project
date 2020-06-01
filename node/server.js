var express = require('express')
var app = express();
app.get('./xxx', function (req, res) {
  res.send('测试');
});
app.listen(5632, function () {
  console.log("5632,服务器启动成功")
})