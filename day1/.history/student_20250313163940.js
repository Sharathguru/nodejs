import EventEmitter from 'events';

class myClass extends EventEmitter {}
console.log(event);

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
student.on("result",()=>
    {
        console.log("friends are shock"); 
    })

student.emit("result")