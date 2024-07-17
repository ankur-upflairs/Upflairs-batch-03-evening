//module system
//cjs => commonJS
//EJS => ECMASCRIPT js
//types of module => built-in , own module , third module
//own module=>
//cjs=>
// const moduleFile=require('./module')
//using destructure
// const {x,person,sum}=require('./module')


// console.log(moduleFile(45,34))
// console.log(moduleFile.person.firstName)
// console.log(moduleFile.sum(3,4))
// console.log(sum(34,23))

//ejs=>
//first add type:"module" in package file

// import x ,{person,sum} from './module1.js'

// console.log(x)
// console.log(sum(3,4))
// console.log(person.firstName)


// let a='sunil'
// console.log(a)

// function show(){
//     console.log('hello world!')
// }
// show()
//create a node project and create a module file and use its fn and variables in index.js


//built-in module
// const os=require('node:os')
// console.log(os.arch())
// console.log(os.freemem())
// console.log(os.totalmem())

//third party module
const colors=require('colors')
console.log("hello world!".bgBlue.white)
console.log("*******".green)




