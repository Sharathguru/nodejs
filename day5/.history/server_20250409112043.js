// import http from "http"
// let server=http.createServer((req,res)=>
// {
//     res.write("hello world")
//     res.end()
// })

// server.listen(5000,()=>
// {
//     console.log("server is an 5000......");
    
// })


let http=require("http")
let server=http.createServer((req,res)=>
{
    res.write("hello")
    res.end()
})
server.listen(5000,()=>
{
    console.log("server 5000 -----");
    
})


import { log } from "console"
// et http=require("http")
// let server=http.createServer((req,res)=>
// {
//     res.statusCode=200;
//     res.statusMessage="okay"
//     res.setHeader("content-type","text/plain")
//     res.write("hello world")
//     res.end()
// })
// server.listen(5000,()=>
// {
//     console.log("server 5000 -----");
    
// })



import express from "express"

let app=express()


app.use("/",(req,res)=>{
    
})

app.listen(3000,(req,res)=>{
    console.log("serer");
    
})