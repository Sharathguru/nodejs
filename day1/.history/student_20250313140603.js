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
        console.log("relative are sad"); 
    })
//friend
student.on("result1",()=>
    {
        console.log("friends are shock"); 
    })

student.emit("result1")