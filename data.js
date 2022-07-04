const express = require("express");
const app = express();

const middleware1 = function(req,res,next){
    console.log('middleware1')
    next()

}
const middleware2=function(req,res,next){
console.log("middleware2")
next()
}




app.get("/one",middleware1,function(req,res){
     console.log("md1")
    res.send("one")
})

app.get("/two",middleware1,middleware2,function(req,res){
    console.log("md2")
    res.send("two")
})
app.get("/three",middleware1,middleware2,function(req,res){
    console.log("md3")
    res.send("three")
})
app.listen(3030)