    // let bufferFromString=Buffer.from("hello")
    // console.log(bufferFromString);
    
    // let allocatedBuffer=Buffer.alloc(8)
    // console.log(allocatedBuffer);
    // let bufferFromString=Buffer.from("hello")
    // allocatedBuffer.write("hello")
    // console.log(allocatedBuffer);


    import fs, { createReadStream, createWriteStream, ReadStream } from "fs"

    // let readStram=fs.createReadStream("./index.txt",{highWaterMark:4,encoding:"utf-8"})

    // readStram.on("data",(chunk)=>
    // {
    //     // console.log("-----Chunk----");
    //     console.log(chunk);
    // })

    // let writeStream=fs.createWriteStream("test1.txt")

    // writeStream.write("hello Good Afternoon",(err)=>{
    //     if(err)console.log(err);
    //     console.log("file Written");
    // })






    //   let readStram=fs.createReadStream("./index.txt")
    //   let writeStream=fs.createWriteStream("test.txt")
    // readStram.on("data",(chunk)=>
    // {
    //     writeStream.write(chunk,(err)=>
    //     {
    //         if(err)console.log(err);
    //         console.log("file Written");
    //     })
    // })


    
// import zlib from "zlib";

// let readStram=fs.createReadStream("./index.txt")
// let gzip=zlib.createGzip()
// let writeStream=fs.createWriteStream("./file.gz")

// readStram.pipe(gzip).pipe(writeStream)


    let writeStream=createWriteStream("index1")
    writeStream.write("hello")

    let ReadStream=createReadStream("./index1.txt")



  

    


