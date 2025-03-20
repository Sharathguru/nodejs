    // let bufferFromString=Buffer.from("hello")
    // console.log(bufferFromString);
    
    let allocatedBuffer=ArrayBuffer.alloc(8)
    console.log(allocatedBuffer);
    allocatedBuffer.write("helow")