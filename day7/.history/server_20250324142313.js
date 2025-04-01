import {createServer} from "http"
import fs from "fs"
import { connect } from "http2";
let PORT=5000;
const server=createServer((req,res)=>
{
    if(req.method==="POST")
    {
        if (req.headers["content-type"]==="application/x-www-form-urlencoded") 
            {
            // console.log(req.headers);
            let body="";
            req.on("data",(chunks)=>
            {
                body+=
            })

            }
        else
        {

        }
    }
    else
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
            let css=fs.readFileSync("./style.css","utf-8")
        res.end(css)
        }
    else
{
    res.writeHead(404,"Not Found",{"content-type":"text/html"})
    let err=fs.readFileSync("./pnf.html","utf-8")
    res.end(err)
}   
}
})

server.listen(PORT,()=> console.log(`Server is on ${PORT}`));
