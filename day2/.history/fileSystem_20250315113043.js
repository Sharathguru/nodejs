import fs from "fs";

// fs.mkdirSync("React-app")
// fs.mkdirSync("./React-app/public")
// fs.mkdirSync("./React-app/src")
// fs.mkdirSync("./React-app/src/COMPONENTS")
// fs.writeFileSync("./React-app/src/COMPONENTS/Home.jsx","<h1>Hello World</h1>")
// fs.unlinkSync("./React-app/src/COMPONENTS/Home.jsx")-------this is for deleting the file
// fs.writeFileSync("./React-app/src/COMPONENTS/Home.jsx","")
// fs.writeFileSync("./React-app/src/Main.jsx","")
// fs.writeFileSync("./React-app/src/index.html","")

// fs.writeFileSync("./React-app/src/main.jsx","")
fs.writeFile("./React-app/src/Index1.html","<h2>hello</h2>",(err)=>{
if(err)
{
console.log("Error");
}
else
{
    console.log("File ");
    
}
})