var express = require('express');
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
	  console.log("/" + req.method);
	  next();
});

router.get("/",function(req,res){
	  res.sendFile(path + "index.html");
});

router.get("/index",function(req,res){
	  res.sendFile(path + "index.html");
});

router.get("/aboutus",function(req,res){
	  res.sendFile(path + "aboutus.html");
});

router.get("/contact",function(req,res){
	  res.sendFile(path + "contact.html");
});

app.use("/",router);

app.use("*",function(req,res){
	  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
	  console.log("The server is running on port 3000");
});
