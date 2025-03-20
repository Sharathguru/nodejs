    // let bufferFromString=Buffer.from("hello")
    // console.log(bufferFromString);
    
    // let allocatedBuffer=Buffer.alloc(8)
    // console.log(allocatedBuffer);
    // let bufferFromString=Buffer.from("hello")
    // allocatedBuffer.write("hello")
    // console.log(allocatedBuffer);


    import fs from "fs"

    // let readStram=fs.createReadStream("./index.txt",{highWaterMark:4,encoding:"utf-8"})

    // readStram.on("data",(chunk)=>
    // {
    //     // console.log("-----Chunk----");
    //     console.log(chunk);
    // })

    let writeStram=fs.createReadStream("test.txt")

    writeStram.wri

