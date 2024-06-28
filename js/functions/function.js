//function is a block of code that used to perform some specific task
//function may take arguments or not ,function may return  something or not

//hoisting is concept of using variable and fn before declare
// //function declaration => hoisted
// function sum(a,b){
//     return a+b
// }
// //calling a fn
// console.log(sum(5,7))

//fn expression => not hoisted
// let sum=function(a,b,c){
//     return a+b+c
// }
// console.log(sum(4,6,7))

//arrow fn => not hoisted and doesn't have this keyword
// let square=(a)=>{
//     console.log(a*a)
// }
// square(5)
// single argument
// let square=a=>{
//     console.log(a*a)
// }
// square(5)
// single line code 
// let square=a=> console.log(a*a)
// square(5)

// let square=a=> a*a
// console.log( square(5) )
// //callback fn => fn that is passed as an argument to another 
// //fn and called inside it
// function increaseBy5(x){
//     return x+5
// }
// function add(fn,a ,b){
//     let c=fn(a)//fn is callback fn
//     return c+b
// }
// console.log(add(increaseBy5,8,7))

// console.log(add(a=>a*2,  23 ,4))

// iife 
// (function(){
//     console.log('imediately invoked fn expression')
// })()















