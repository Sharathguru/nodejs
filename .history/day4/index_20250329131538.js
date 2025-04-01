    import { create } from "domain"
import fs from "fs"
    
    // let bufferFromString=Buffer.from("hello")
    // console.log(bufferFromString);
    
    // let allocatedBuffer=Buffer.alloc(8)
    // console.log(allocatedBuffer);
    // let bufferFromString=Buffer.from("hello")
    // allocatedBuffer.write("hello")
    // console.log(allocatedBuffer);


    // 

    // let readStram=fs.createReadStream("./demo.txt")

    // readStram.on("data",(chunk)=>
    // {
    //     console.log("-----Chunk----");
    //     console.log(chunk);
        
    // })




import { createServer } from "http"

let app=createServer(())
