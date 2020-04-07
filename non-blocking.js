const fs=require('fs');

fs.readFile('node.txt',function(err,data){
    if(err){
        console.log("Error in reading file");
    }
    setTimeout(()=>{
        console.log("Display After 2 Seconds");
    },2000)
})

console.log('Start Here');