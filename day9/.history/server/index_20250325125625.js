import {createServer} from "http"
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
        name:""
    }
]


})

server.listen(PORT,()=>
{
    console.log("Server is Started");
    
})