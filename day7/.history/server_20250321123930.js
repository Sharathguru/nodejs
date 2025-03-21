import {createServer} from "http"
let PORT=3000;
const server=createServer((req,res)=>
{
if(req.url==="/"||req.url==="/home")
{
    res.writeHead(200,"ok",{"content-type":"text/html"})
    res.end("<h1>Home Page<h1>")
}
if(req.url==="/"||req.url==="/home")
    {
        res.writeHead(200,"ok",{"content-type":"text/html"})
        res.end("<h1>Home Page<h1>")
    }
    else
{
    res.writeHead(404,"Not Found",{"content-type":"text/html"})
res.end("<h1>Not Found</h1>")
}
})

server.listen(PORT,()=> console.log(`Server is on ${PORT}`));
