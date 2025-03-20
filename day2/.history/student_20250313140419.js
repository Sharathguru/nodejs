import EventEmitter from 'events';

class myClass extends EventEmitter {}
let student=new myClass()


//parents
student.on("result",()=>
{
    console.log("parent are happy"); 
})
//relative
student.on("result",()=>
    {
        console.log("relative are happy"); 
    })