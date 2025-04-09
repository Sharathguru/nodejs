async function getEmployessData()
{
try {
    let data=fetch("http://localhost:8080")
    ;(await data).json
} catch (error) {
    
}
}