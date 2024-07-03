//json => javascript object notation
let jsonData=`[
    {
      "userId": 1,
      "id": 1,
      "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisqui aperiam non debitis possimus qui neque nisi nulla"
    }
]`
// console.log(JSON.parse(jsonData))//convert json to js object
// let obj={name:'pankaj'}
// console.log(JSON.stringify(obj))

//fetch api => is used to fetch data from any web api
// fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.json()).then((data)=>console.log(data))
let box=document.querySelector('.box')

// async function getData() {
//     let res=await fetch('https://dummyjson.com/products')
//     let data= await res.json()
//     // console.log(data.products)
//     let products=''
//     data.products.forEach(element => {
//         products+=`<div class='i'>
//         <img src='${element.thumbnail}'>
//         <p>${element.title}</p>
//         </div>
//         `
//     });
//     box.innerHTML=products
// }
// getData()

async function getJoke() {
    let res=await fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept':'application/json'
        }
    })
    let data= await res.json()
    console.log(data)
    box.innerHTML=data.joke
}
getJoke()




