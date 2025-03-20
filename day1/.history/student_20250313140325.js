import EventEmitter from 'events';

class myClass extends EventEmitter {}
let student=new myClass()

student.on("result",())