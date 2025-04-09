async function getEmployessData()
{
try {
    let data=await fetch("http://localhost:8080")
    let datas=data.json;
    console.log(data);
    
} catch (error) {
    
}
}