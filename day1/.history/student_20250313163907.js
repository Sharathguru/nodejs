import EventEmitter from 'events';

class myClass extends EventEmitter {
    log
}
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