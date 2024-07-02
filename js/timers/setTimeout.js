//setTime =>

let timeout=setTimeout(function(){
     console.log('hello everyone')
},5000)

let btn=document.querySelectorAll('button')[3]
 
btn.addEventListener('click',function(){
    clearTimeout(timeout)
})



