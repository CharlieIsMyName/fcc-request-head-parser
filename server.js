
var express=require("express");
var app=express();
var port=process.env.PORT||8080;


app.get('/*',function(req,res){
  var addr=req.connection.remoteAddress;
  var lang=req.headers["accept-language"].split(",")[0];
  var software=req.headers["user-agent"];
  res.json({
    "ipaddress" : addr,
    "language" : lang,
    "software" : software
  });
});

app.listen(port,function(){
  console.log("the app is listening at port: "+port);
});