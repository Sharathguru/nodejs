    // let bufferFromString=Buffer.from("hello")
    // console.log(bufferFromString);
    
    // let allocatedBuffer=Buffer.alloc(8)
    // console.log(allocatedBuffer);
    // let bufferFromString=Buffer.from("hello")
    // allocatedBuffer.write("hello")
    // console.log(allocatedBuffer);


    import fs from "fs"

    let readStram=fs.createReadStream("./demo.txt",highWaterMark:)

    readStram.on("data",(chunk)=>
    {
        console.log("-----Chunk----");
        console.log(chunk);
        
    })