///                 ES Modules

// // import c,{a,b} from "./index.js"
// // console.log(a);
// // console.log(b());
// // console.log(c());

//     ////////////////////////    2 ways ////////////////////////////
// import c,{a as add,b} from "./index.js" //-------1

// // import * as module1 from "./index.js"   //-------2

// console.log(module1.a);
// console.log(module1.b());
// console.log(module1.default());

//////////////////////////////////Common JS//////////////////////////////////////////////////



// console.log(require);
// let {a,b}=require("./index")
let c=require("./index")

console.log(c());

// console.log(res.a);    
// console.log(res.b());


// console.log(a);
// console.log(b());








