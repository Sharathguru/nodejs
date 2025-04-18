import {createServer} from "http"
import fs from "fs"
import { connect } from "http2";
let PORT=3000;
const server=createServer((req,res)=>
{
if(req.url==="/"||req.url==="/home")
{
    res.writeHead(200,"ok",{"content-type":"text/html"})
    let home=fs.readFileSync("./index.html","utf-8")
    res.end(home)

}
else if(req.url==="/contact")
    {
        res.writeHead(200,"ok",{"content-type":"text/html"})
        let contact=fs.readFileSync("./contact.html","utf-8")
    res.end(contact)
    }
    else if(req.url==="/style")
        {
            res.writeHead(200,"ok",{"content-type":"text/css"})
            let contact=fs.readFileSync("./","utf-8")
        res.end(contact)
        }
    else
{
    res.writeHead(404,"Not Found",{"content-type":"text/html"})
res.end("<h1>Not Found</h1>")
}
})

server.listen(PORT,()=> console.log(`Server is on ${PORT}`));
