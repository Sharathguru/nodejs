async function getEmployeesData() {
    try {
        let response = await fetch("http://localhost:8080");
        let data =  response.json(); 
        console.log(data);
    } catch (error) {
        console.log("Error:", error); 
    }
}
getEmployeesData()
