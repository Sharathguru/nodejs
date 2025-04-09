// // // import { log } from "console";
// // // import fs from "fs";


// // // fs.writeFile("demo.txt","Good Afernoon",(err)=>{
// // //     if(err) console.log(err);
// // //     console.log("file written");
// // // })


// // // fs.readFile("./demo.txt","utf-8",(err,data)=>
// // // {
// // //     if(err)console.log(err);
// // //     console.log(data);
// // // })

// // // fs.appendFile("./demo.txt","\nGood Evening",(err)=>
// // // {
// // //     if(err)console.log(err);
// // //     console.log("Data Add"); 
// // // })


// // // fs.unlink("./demo.txt",(err)=>
// // // {
// // // if(err)console.log(err);
// // // console.log("Deleted");
// // // })


// // // fs.mkdir("react-app",(err)=>
// // // {
// // //     if(err)console.log(err);
// // //     console.log("Create the folder");  
// // // })


// // // fs.rmdir("./react-app",(err)=>
// // // {
// // //     if(err) console.log(err);
// // //     console.log("deleted Folder");   
// // // })



// // //-------------------------------- Promises ----------------------------------

// // import { log } from "console"
// // import fs from "fs/promises"

// // // let data=fs.writeFile("./text.txt","welcome to all")
// // // console.log(data); ---> pending


// // // fs.writeFile("./text.txt","welcome to all").then(()=>
// // // {
// // //     console.log("file Written");
// // // }).catch((err)=> console.log(err));//----> resovled and rejected


// // // fs.readFile("./text.txt","utf-8").then((data)=>
// // // {
// // // console.log(data);
// // // }).catch((err)=> console.log(err));//-----> it will read the data 

// // // fs.appendFile("./text.txt","\nThis World").then((data)=> 
// // // {
// // //     console.log("Data Inserted");
// // // }).catch((err)=> console.log(err));

// // // fs.unlink("./text.txt").then(()=>
// // // console.log("Deleted the file")).catch((err)=> console.log(err));


// // // fs.mkdir("react-app").then(()=>
// // // {
// // //     console.log("create the folder");
// // // }).catch((err)=> console.log(err));


// // // fs.rmdir("./react-app").then(()=>
// // //     {
// // //          console.log("deleted the folder");
// // //      }).catch((err)=> console.log(err));


// // //-------------------------------------- Aysnc and await --------------------------------------

// // //    let Promises= async()=>
// // // {
// // //     try
// // //     {
// // //       await fs.writeFile("./text.txt","welcome to all")
// // //     }
// // //     catch(err)
// // //     {
// // //       console.log(err);
// // //     }
// // // }




// // let File=async()=>
// // {
// //   try {
// //    await fs.mkdir("./react-app")
// //    await fs.mkdir("./react-app/public")
// //    await fs.mkdir("./react-app/src")
// //    await fs.mkdir("./react-app/src/component")
// //    await fs.writeFile("./react-app/src/component/Home.jsx","")
// //    await fs.writeFile("./react-app/src/App.jsx","")
// //    await fs.writeFile("./react-app/src/index.html","")
// //    await fs.appendFile("./react-app/src/component/Home.jsx","welcome") 
// //    let data=await fs.readFile("./react-app/src/component/Home.jsx","utf-8")
// //    console.log(data);
   
// //   } 
// //   catch (error) 
// //   {
// //     console.log(error);  
// //   }
// // }
// // File()


//     var a=20;
//     let b=10;
//     const c=30
//     console.log(a)
//     console.log(b)
//     console.log(c)
    


// import { error } from "console";
// import fs from "fs/promises"; // not fs/promises
import { error, log } from "console";
import fs, { read } from "fs"
import { text } from "stream/consumers";

// let  write1=fs.createWriteStream("text1.txt")
// write1.write("welcome to home",((error)=>{
//     console.log(error);
//     console.log("file writer");
// }))


// let read=fs.createReadStream("text1.txt",{highWaterMark:3,encoding:"utf-8"})
// read.on("data",(chuck)=>
// {
//     console.log(chuck); 
// })


// let readStream=fs.createReadStream("text.txt")
// let  write1Stream=fs.createWriteStream("text1.txt")
// // read.on("data",(chuck)=>{
// //     write1.write(chuck,(error)=>{
// //         if(error)console.log(error);
// //         console.log("file writen");
        
        
// //     })
// // })



import { createServer } from "http";

let server=createServer((req,res)=>{
    // res.statusCode=200
    // res.statusMessage="okay"
    // res.setHeader("context-type","text/plain")



    res.writeHead(200,"okay",{context-t})
    res.end("hello")
})

server.listen(3000,(req,res)=>{
    console.log("server started");
})