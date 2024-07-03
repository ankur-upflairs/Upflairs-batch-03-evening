
//promise => async task
// asynchronous programming
//timers
console.log('before timer')
setTimeout(()=>console.log('fetch'),10)//async
console.log('after timer')
//fetch
//promise => it is a way to handle async task(background task)
//states of promise => pending , fullfil , rejected
//in fullfil state => cb fn inside then is executed
//in rejected state => cb fn inside catch is executed
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res=>console.log(res))
// .catch(err=>console.log(err))

// let resPromise=fetch('https://jsonplaceholder.typicode.com/posts')
// let dataPromise=resPromise.then(res=>res.json())
// let data=dataPromise.then(data=>console.log(data))

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res=>res.json())
// .then(data=>data)
// .catch(err=>console.log(err))

//async -await 
let box=document.querySelector('.box')

async function getData() {
    let res=await fetch('https://jsonplaceholder.typicode.com/posts')
    let data= await res.json()
    console.log(data)
    //look for structure of data
    let post=''
    data.forEach((value,i,arr) => {
        // console.log(value.title)
        post+=`<li>${value.title}</li>`
    });
    box.innerHTML=`<ol>${post}</ol>`
}
getData()





