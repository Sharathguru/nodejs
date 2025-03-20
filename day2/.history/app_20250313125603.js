// import c,{a,b} from "./index.js"


console.log(a);
console.log(b());
console.log(c());

    ////////////////////////    2 ways ////////////////////////////
//import c,{a as add,b} from "./index.js" -------1

import * as module1 from "./index.js"

console.log(module1.a);
console.log(module1.b());
console.log(module1.default);



