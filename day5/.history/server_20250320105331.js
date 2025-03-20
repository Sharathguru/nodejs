import http from "http"
let server=http.createServer((req,res))

server.listen(5000,()=>
{
    console.log("server is an 5000......");
    
})
