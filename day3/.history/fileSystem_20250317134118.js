// import { log } from "console";
// import fs from "fs";


// fs.writeFile("demo.txt","Good Afernoon",(err)=>{
//     if(err) console.log(err);
//     console.log("file written");
// })


// fs.readFile("./demo.txt","utf-8",(err,data)=>
// {
//     if(err)console.log(err);
//     console.log(data);
// })

// fs.appendFile("./demo.txt","\nGood Evening",(err)=>
// {
//     if(err)console.log(err);
//     console.log("Data Add"); 
// })


// fs.unlink("./demo.txt",(err)=>
// {
// if(err)console.log(err);
// console.log("Deleted");
// })


// fs.mkdir("react-app",(err)=>
// {
//     if(err)console.log(err);
//     console.log("Create the folder");  
// })


// fs.rmdir("./react-app",(err)=>
// {
//     if(err) console.log(err);
//     console.log("deleted Folder");   
// })



//-------------------------------- Promises ----------------------------------

import fs from "fs/promises"

// let data=fs.writeFile("./text.txt","welcome to all")
// console.log(data); ---> pending


fs.writeFile("./text.txt","welcome to all").then(()=>
{
    console.log("file Written");
}).catch((err)=> console.log(err));//----> full
