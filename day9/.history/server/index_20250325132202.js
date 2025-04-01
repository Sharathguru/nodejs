import {createServer} from "http"
import { json } from "stream/consumers";
let PORT=8080;

let server=createServer((req,res)=>
{
let employee=[
    {
    name:"Rajath",
    esal:20000,
    skills:["html","css"]
    },
    {
        name:"Prajwal",
        esal:15000,
        skills:["js","java"]
    }
]
res.writeHead(200,"Okay",{"content-type":"application/json",
    ,
    "access-control-allow-origin":"*"
})
res.end(JSON.stringify(employee))
})

server.listen(PORT,()=>
{
    console.log("Server is Started");
    
})