// var express = require("express");

// var app = express();

// app.listen(2002,function(){
//     console.log("Server Started")
// })
// // ctrl+c to stop server 
// //restart server after change in code
// app.get("/hello",function(req,resp){ //req and resp are ojects -formal args
//     resp.contentType("text/html");
//     resp.send("Hello there!");
// })
// app.get("/signup",function(req,resp){
//     resp.write("<b><i>You are Signed up!!</i></b><br>");
//     resp.end();
// })

var express = require("express");
var app = express();

app.listen(8000,function(){
    console.log("Server Started");
    console.log(__dirname);
})

app.get("/",function(req,resp){
    path = __dirname+"/index.html";
    resp.sendFile(path);

})