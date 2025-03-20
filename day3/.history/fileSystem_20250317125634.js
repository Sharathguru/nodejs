import { log } from "console";
import fs from "fs";

// fs.writeFile("demo.txt","Good Afernoon",(err)=>{
//     if(err) console.log(err);
//     console.log("file written");
// })


// fs.readFile("./demo.txt","utf-8",(err,data)=>
// {
//     if(err)console.log(err);
//     console.log(data);
// })

fs.appendFile("./demo.txt","Good Evening",(err)=>
{
    if(err)console.log(err);
    
})
