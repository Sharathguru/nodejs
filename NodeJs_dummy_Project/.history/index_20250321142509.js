import {createServer} from 'http'
import fs from "fs"
const Port=3000;

const server=createServer((req,res)=>
{
if(req.url==="/"||req.url==="/home")
{
    res.writeHead(200,"okay",{"content-type":"text/html"})
    res.end("<h1>Homee</h1>")
}
})

server.listen(Port,()=> console.log("server started"));