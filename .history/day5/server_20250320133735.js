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
    req.s
    res.write("hello")
    res.end()
})
server.listen(5000,()=>
{
    console.log("server 5000 -----");
    
})