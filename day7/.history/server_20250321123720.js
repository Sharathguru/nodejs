import {createServer} from "http"
let PORT=3000;
const server=createServer((req,res)=>
{
if(req.url==="/"||req.url==="/home")
{
    res.writeHead(200,"ok",{"content-type":"text/html"})
    res.end("<h1>Home Page<h1>")
}
    else
{
    res.writeHead(404,"Not Found",{"content-type":"text/html"})

}
})

server.listen(PORT,()=> console.log("Server is on ${PORT}"));
