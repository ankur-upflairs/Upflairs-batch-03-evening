let para = document.querySelector('.p')
para.addEventListener('mouseenter',function(){
    let title= para.getAttribute('title')
    console.log(title)
    this.setAttribute('class','p a')

})

para.addEventListener('mouseleave',function(){
    this.setAttribute('class','p')
})

let para1=document.querySelector('.p1')
para1.addEventListener('mouseenter',()=>{
    para1.style.backgroundColor='red'
    para.style.fontSize='30px'
})

let btn1=document.querySelector('button')
let box=document.querySelector('.hide')
// btn1.addEventListener('click',function(){
//     box.classList.add('show')
// })
// btn1.addEventListener('contextmenu',function(){
//     box.classList.remove('show')
//     console.log(box.classList.contains('hide'))
// })

btn1.addEventListener('click',()=>{
    box.classList.toggle('show')
})



