import http from "http"
let server=http.createServer((req,res)=>
{
    res.write("hello world")
})

server.listen(5000,()=>
{
    console.log("server is an 5000......");
    
})
