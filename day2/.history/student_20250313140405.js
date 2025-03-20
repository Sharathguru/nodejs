import EventEmitter from 'events';

class myClass extends EventEmitter {}
let student=new myClass()


//parents
student.on("result",()=>
{
    console.log("parent are happy"); 
})
//re
student.on("result",()=>
    {
        console.log("parent are happy"); 
    })