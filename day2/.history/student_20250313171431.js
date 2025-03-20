import EventEmitter from 'events';
// console.log(event);



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


// const EventEmitter = require('events');

class mySchool extends EventEmitter {}

let school = new mySchool();

school.once("result", () => {
    console.log("This will run only once.");
});

school.emit("result"); // First time -> Executes
school.emit("result"); // Second time -> Does nothing
