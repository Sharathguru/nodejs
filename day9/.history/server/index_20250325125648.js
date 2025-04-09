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
        name:"Prajwal",
        esal:15000,
        skills:["js"]
    }
]


})

server.listen(PORT,()=>
{
    console.log("Server is Started");
    
})