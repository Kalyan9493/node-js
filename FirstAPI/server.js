const express=require('express');

const app=express();

app.get("/",function(req,res){
    res.send("My First API")
});

app.listen(8080,function(){
    console.log("API running on Port 8080 !")
})