import {createServer} from 'http'
import fs from "fs"
const Port=3000;

const server=createServer((req,res)=>
{
if(req.url==="/"||req.url==="/home")
{
    res.writeHead(200,"okay",{"content-type":"text/html"})
    let home=fs.readFileSync("./index.html","utf-8")
    res.end(home)
}
if(req.url==="/cart")
    {
        res.writeHead(200,"okay",{"content-type":"text/html"})
        res.end("<h1>Homeeeee</h1>")
    }
if(req.url==="/style")
    {
        res.writeHead(200,"okay",{"content-type":"text/css"})
        let css=fs.readFileSync("./style.css","utf-8")
        res.end(css)
    }


})

server.listen(Port,()=> console.log("server started"));