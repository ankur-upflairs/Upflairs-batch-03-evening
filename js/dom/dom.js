//  // console.log(document.all)
//  let a=document.getElementsByTagName('p')
//  //return collection
//  console.log(a);console.log(a[0])
//  let b=document.getElementsByClassName('para')
//  console.log(b[0])

//  let c=document.getElementById('x')
//  console.log(c)

// let d=document.querySelectorAll('.para span')
// //use css selector
// console.log(d)

// let e=document.querySelector('.para span')
// // console.log(e)
// //text and html
// console.log(e.innerText)//accessig text
// e.innerText='bye'
// // e.innerText= '<b>bye</b>'//this will not work
// e.innerHTML//accessing html
// e.innerHTML='<b>bye</b>'

let el=document.querySelector('.para span')

function changetext(){
    el.innerHTML='<b>bye</b>'
}

//make a button with text 'hover here'
//when it hovers than text changed to 'welcome'( bold ,italic)
// when curser removes than change text to original
let btn_el=document.getElementById('btn')

let reverseText=()=>{
    btn_el.innerHTML='hover here'
}

btn_el.addEventListener('mouseleave',reverseText);

// btn_el.addEventListener('mouseenter',changeButtonText);

btn_el.addEventListener('mouseenter',function(){
    // console.log(this)
    this.innerHTML='<b><i>welcome</i></b>'
});


// function changeButtonText(){
//     btn_el.innerHTML='<b><i>welcome</i></b>'
// }





