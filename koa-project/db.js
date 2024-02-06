const mongoose = require("mongoose")

let url = 'mongodb+srv://jin:19940423@test.3nbktwj.mongodb.net/?retryWrites=true&w=majority';
//连接数据库
mongoose.connect(url)
 
// 连接成功
mongoose.connection.on("connected", function () {
    console.log("数据库连接成功");
})
// 连接失败
mongoose.connection.on("error", function (err) {
    console.log("数据库连接失败 原因：" + err);
})
// 连接断开
mongoose.connection.on('disconnectied', function () {
    console.log('连接断开');
})
 
module.exports = mongoose