//setIntervel=>
    let n=0
// let PrintNo=()=>{document.write(n);n++}   
// let printInterval=setInterval(PrintNo,1000)

// clearInterval(printInterval)

let h1=document.querySelector('h1')
let startBtn=document.querySelectorAll('button')[0]
let stopBtn=document.querySelectorAll('button')[1]
let clearBtn=document.querySelectorAll('button')[2]
let box=document.querySelector('.box1')

let interval;
let sec=0;
let ms=0;
startBtn.addEventListener('click',function(){
    if(!interval){
        interval=setInterval(() => {
            console.log(interval)
            ms++
            if(ms==999){
                ms=0;sec++
            }
            box.innerHTML=`<h1>${sec}:${ms}</h1>`
        }, 1);
    }
})
stopBtn.addEventListener('click',function(){
    clearInterval(interval)
    interval=false
    // console.log(interval)
})
clearBtn.addEventListener('click',function(){
        ms=0;sec=0;
        box.innerHTML=`<h1>${sec}:${ms}</h1>`  

})

//










