    // let bufferFromString=Buffer.from("hello")
    // console.log(bufferFromString);
    
    let allocatedBuffer=Buffer.alloc(5)
    console.log(allocatedBuffer);
    let bufferFromString=Buffer.from("hello")
    allocatedBuffer.write("hello")
    console.log(allocatedBuffer);
    console.log(bufferFromString);
    
    