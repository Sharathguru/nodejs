import {createServer} from 'http'
import fs from "fs"
const Port=3000;

const server=createServer((req,res)=>
{
if(req.url==="/"||req.url==="/index")
{
    res.writeHead(200,"okay",{"content-type":"text/html"})
    let =fs.readFileSync("./index.html","utf-8")
}
if(req.url==="/about")
    {
        res.writeHead(200,"okay",{"content-type":"text/html"})
        res.end("<h1>Homeeeee</h1>")
    }

})

server.listen(Port,()=> console.log("server started"));