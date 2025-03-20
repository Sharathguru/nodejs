//                          creating the server in 2 ways

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


// let http=require("http")
// let server=http.createServer((req,res)=>
// {
//     res.write("hello")
//     res.end()
// })
// server.listen(5000,()=>
// {
//     console.log("server 5000 -----");
    
// })



// header to  understand to the developer in 2 way


let http=require("http")
let server=http.createServer((req,res)=>
{
   /*  res.statusCode=200;
    res.statusMessage="okay"
    res.setHeader("content-type","text/plain")  1 way  */

    res.writeHead(200,"okay")
    res.write("hello world")
    res.end()
})
server.listen(5000,()=>
{
    console.log("server 5000 -----");
    
})