import {createServer} from 'http'
import fs from "fs"
const Port=3000;

const server=createServer((req,res)=>
{
if(req.url==="/"||req.url==="/home")
{
    res.writeHead
}
})

server.listen(Port,()=> console.log("server started"));