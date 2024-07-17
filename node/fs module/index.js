const fs=require('node:fs')

// let dir=fs.readdirSync('..')
// console.log(dir)
// let data=fs.readFileSync('./sample.txt','utf-8')
// console.log(data)

// fs.writeFileSync('hello.txt',"hello this is my new file created")
// fs.writeFileSync('sample.txt',"hello this is my new file created")

// fs.appendFileSync('sample.txt','\n this is appended data')
//------------
//read file and print data => "hello this is my new file created"
//change created to modified in this file and read it again
//---------------
//asynchronous => generally every asynchronous task is assoicated with a callback function
//async task doesn't executes untill the callstack is empty
fs.readFile('sample.txt','utf-8',(err,data)=>{
    console.log(data)
})
console.log('hello')

fs.writeFile('sample.txt','hello this is my new file modified',(err)=>{
    if(err) console.log(err)
    console.log('data writing')
})
console.log('after write')

fs.appendFile('sample.txt','hello this is my new file appended',(err)=>{
    if(err) console.log(err)
    console.log('data appending')
})



