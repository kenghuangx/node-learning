var express=require('express');
var utility=require('utility');
var app=express();
app.get('/',function(req,res){
var q=req.query.q;
var md5Value=utility.md5(q);
res.send(md5Value);

});
app.listen(3000,function(req,res){
	console.log("app is running ar port 3000")
})
//md5加密，需要用127.0.0.1:3000/?q=.....来把你想要转换的字符串转换为md5加密