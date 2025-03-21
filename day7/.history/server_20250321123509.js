import {createServer} from "http"
let PORT=3000;
const server=createServer((req,res)=>
{
if(req.url==="/"||req.url==="")
})

server.listen(PORT,()=> console.log("Server is on ${PORT}"));
