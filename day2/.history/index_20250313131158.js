//---------------       ES Module        -----------------------

// let a=5

// let b=()=>{ 
    
//     return "hello"
// }
// let c=()=>
// {
//     return "hii"
// }
// export default c;
// export{
//     a,
//     b
// }



let a=5

let b=()=>{ 
    
    return "hello"
}
let c=()=>
{
    return "hii"
}

module.exports={
    a,b
}
module.exports=c;