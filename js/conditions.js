
//falsy value => empty string ''
//null , undefined , 0 , false
//if is used to execute a block of code  based on some condition
//if the condition is true than if-block is executed
//if the condition is false than else-block is executed

//confirm => 

// var isAdult = confirm('are you 18 + ?')
// console.log(isAdult)


// if (condition) {
//     // if-block 
// } else {
//     // else-block 
// }

// if( 4 > 6 ){
//     console.log('true')
// }
// else {
//     console.log('false')
// }
// if user is 18 + than show a msg that u are eligible for 
// voting

// if(isAdult){
//     alert('you are a eligible voter')
// }
// else{
//     alert('you are not a eligible voter')

// }

// ask user for their age 
// if user is 18 + than show a msg that u are eligible for 
// voting

// let age = prompt('enter your age ')
//prompt takes input from user always as a string
//prompt is used to take user input 
// alert(age)
// console.log(age)
// if(age > 18){
//     alert('you are a eligible voter')
// }
// else{78
//     alert('you are not a eligible voter')
// }

//work guessing app 
//if -else ladder 
// if -else -if
// if(age > 0 && age <= 20){
//     alert('you must be a student')
// }
// else if(age > 20 && age <= 60){
//     alert('you must be a working professional')
// }
// else if (age > 60){
//     alert('you must be a retired person')    
// }
// else {
//     alert('you entered wrong age ')    
// }

//calculate the double of age
// console.log(age + age )
//parseInt , parseFloat , Number
// console.log(parseInt(age))
// age = parseInt(age)
//converts the string into integer

// age =parseFloat(age)
// console.log(age + age )


// take a no from user and find that the no is zero,negetive 
// or positive 

// let n = parseFloat(prompt('enter a no.'))
//nested if -else 
//if inside if
// if(n>=0){
//     if(n > 0){
//         alert('positive')
//     }
//     else{
//         alert('zero')
//     }
// }
// else{
//     alert('negetive')
// }

//take principal amount , time , rate from user
//and calculate simple interest
// if interest is higher than 20% - 40 %of total 
// than show a msg interest is too high 
//0-20 normal interest 
// more than 40 %  - too expensive


//ternary operator => shorthand of if - else
//used when one line of code is executed

//condition ? statement 1 : statement 2

// let age = parseInt(prompt('enter your age ? '))
// // age > 18 ? alert('voter') : alert( 'not a voter')
// let pocketMoney = (age > 15 ? 2000 : 1000)
// console.log(pocketMoney)

//take a no from user and if no is positive than
//save value of a variable 'result' as 'positive' string
//else it's value is 'negetive'
// and print it in console

let n= parseInt(prompt('enter a no. '))
let result= n>=0 ? 'positive' : 'negetive'
console.log(result)








