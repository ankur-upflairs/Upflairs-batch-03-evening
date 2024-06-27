
// let i=1//loop starting

// //end condition
// while(i < 11){
//     console.log(i)
//     //updation
//     //update condition
//     i++
// }
//print 1-100
// let i=1
// while(i<=100){
//     document.write(i,'<br>')
//     i++
// }
//print 100 to 1 no. skipping 2 nos.

// let i=100;
// while(i>0){
//     document.write(i,'<br>')
//     i-=3//i=i-3
// }
//print table of a no.

// let n= parseInt(prompt('enter a no.'))
// let i=1;
// while(i<=10){
//     document.write(n ,' * ', i, ' = ', i*n,'<br>')
//     i++
// }

//for loop =>
//start,condition(stop),updation

// for(let i=1;i<=10;i++){
//     document.write(i)
// }

//do-while => condition cheched at exit point
//always runs at least one time
// let i=1;
// do{
//     document.write(i,'<br>')
//     i++
// }while(i<=10);

//count the no of digits in  a number
//3456 => 4

// let n= parseInt(prompt('enter a no.'))
// let digits=0;
// while(n!=0){
//     //n=3456
//     n=parseInt( n/10 )//345.6(345) - 34 -3 -0
//     digits+=1 //1 -2 -3-4    
// }
// document.write(digits)
//continue => go to next iteration
//break => exit loop
//print 1-100 no. and if any no. is divisible by 23 than 
// exit the loop

// for(let i=1;i<=100;i++){
//     if(i%23 ==0) break
//     document.write(i)
// }

//print 1-100 no. and if any no. is multiple of 7 than 
// skip that no
// for(let i=1;i<=100;i++){
//      if(i%7==0) continue
//      document.write(i)
// }

//nest loop => loop inside loop
//  ****
//  ****
//  ****
//  ****


for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4; j++) {
        document.write('*')
    }
    document.write('<br>')
}
//*
//** 
//***
//****

for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= i; j++) {
        document.write('*')
    }
    document.write('<br>')
}
//1
//12
//123
//1234
//12345

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write(j)
//     }
//     document.write('<br>')
// }
























