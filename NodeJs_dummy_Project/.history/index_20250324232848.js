import {createServer} from 'http'
import fs from "fs"
const Port=3000;

const server=createServer((req,res)=>
{

    if (req.method==="POST") 
        {
            if (req.headers["content-type"]==="application/x-www-form-urlencoded") {
                let body=""
                req.on("data",(chunk)=>
                {
                    res.e
                })
            } else {
                
            }
            console.log(req);
            
        } 
    else {
        
        if(req.url==="/"||req.url==="/home")
            {
                res.writeHead(200,"okay",{"content-type":"text/html"})
                let home=fs.readFileSync("./index.html","utf-8")
                res.end(home)
            }
            else if(req.url==="/item")
                {
                    res.writeHead(200,"okay",{"content-type":"text/html"})
                    let item=fs.readFileSync("./item.html","utf-8")
                    res.end(item)
                }
            else if(req.url==="/cart")
                {
                    res.writeHead(200,"okay",{"content-type":"text/html"})
                    let cart=fs.readFileSync("./cart.html","utf-8")
                    res.end(cart)
                }
                else if(req.url==="/contact")
                    {
                        res.writeHead(200,"okay",{"content-type":"text/html"})
                        let contact=fs.readFileSync("./contact.html","utf-8")
                        res.end(contact)
                    }
            else if(req.url==="/style")
                {
                    res.writeHead(200,"okay",{"content-type":"text/css"})
                    let css=fs.readFileSync("./style.css","utf-8")
                    res.end(css)
                }
    }
})

server.listen(Port,()=> console.log("server started"));