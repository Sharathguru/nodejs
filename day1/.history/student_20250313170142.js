import EventEmitter from 'events';
console.log(event);



// class myClass extends EventEmitter {}


// let student=new myClass()


// //parents
// student.on("result",()=>
// {
//     console.log("parent are happy"); 
// })
// //relative
// student.on("result",()=>
//     {
//         console.log("relative are sad"); 
//     })
// //friend
// student.on("result",()=>
//     {
//         console.log("friends are shock"); 
//     })

// student.emit("result")


class mySchool extends EventEmitter{}

let school=new mySchool()

school.