import fs from "fs";

fs.writeFile("demo.txt","Good Afernoon",(err)=>{
    if(err) console.log(err);
    console.log("file written");
})

fs.readFile("demo.txt","Good Afernoon",(err)=>{
    if(err) console.log(err);
    console.log("file written");
})