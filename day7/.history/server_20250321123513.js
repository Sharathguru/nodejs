import {createServer} from "http"
let PORT=3000;
const server=createServer((req,res)=>
{
if(req.url==="/"||req.url==="/home")
{
    
}
})

server.listen(PORT,()=> console.log("Server is on ${PORT}"));
