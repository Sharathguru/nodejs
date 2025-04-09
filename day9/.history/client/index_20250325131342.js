async function getEmployessData()
{
try {
    let data=await fetch("http://localhost:8080")
    let datas=data.json;
    console.log(datas);
    
} catch (error) {
    console.log("handle");
    
}
}