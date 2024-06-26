//var => scope - global/function
var a=3
//can be redeclare
var a=7 //a is redeclared
//can be reassigned
a=34
console.log(a)

//let => scope = block scope
{
    let b=5; console.log(b)//block scope
}
// console.log(b)
//can't be redeclared
let c = 5
// let c =7 //can't reclare
//can be reassigned
c=23
console.log(c)

//const => scope = block scope
//can't be redeclared
//can't reassigned
//value is given at the time of declaration

const x=23
// x=78 
// const arr= [23,45,67]
// arr[1]= 99
// console.log(arr)



