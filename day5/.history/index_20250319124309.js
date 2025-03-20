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

    let writeStream=fs.createWriteStream("test.txt")

    writeStream.write("hello Good Afternoon",(err)=>{
        if(err)console.log(err);
        console.log("file Written");
    })

