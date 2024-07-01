//array - collection of datatype
let arr=[34,'as',[45,23],true]
//length= > no of element
console.log(arr[2][1])
//for-of => traverse throught elements
// for (const i of arr) {
//     console.log(i)
// } 
//for-in => traverse throught index
// for (const i in arr) {
//     console.log(arr[i])
// }

let a=[2,4,6,8,9,12]
//passed as an arguments and called inside that fn
let squareArray=(element,index,array)=>{
    console.log( element*element )
}
// a.forEach(squareArray)
// let list=''
// a.forEach((el,i)=>{
//     list+=`<li>${el}</li>`
// })
// console.log(list)
// let box=document.querySelector('.box')
// box.innerHTML=`<ul>${list}</ul>`
// let d=a.map((v,i)=>{
//     return v*2
// })
// console.log(d)
// console.log(a.pop())//removes last element
// a.push(23)//add element at last
// a.shift()//removes first element
// a.unshift(56)//add element at start
// let c=a.concat([34,5])
// let d=a.slice(2,5)
// a.reverse()
// a.sort((a,b)=>b-a)
let age=[2,4,6,7,19]
// let isAdult=age.some((v,i)=> v>18
// )
// console.log(isAdult)
// console.log(age.every((v,i)=>v<18))
// console.log(age.find((v,i)=>v<7))

// console.log(age.filter((v,i)=>v%2!=0))
// console.log(age.findIndex((v,i)=>v==7))
// console.log(age.includes(17))
// console.log(age.indexOf(19))
// console.log(typeof age.join(''))
// console.log(age.toString())

let sum =age.reduce((accumalator,value,index,arr)=>{
        return accumalator+value
},
0)
//acc=0 ,val=2 return 2
//2 , 4 , 6
//6 , 6 , 12
//12  , 7 , 19
//19 , 19 , return 38
// console.log(sum)
console.log(age.reduce((acc,v,i,arr)=>acc+v/arr.length,0))
//reverse a string
//return an array using reduce that is double of every element of first array
//hint - split - join 
















