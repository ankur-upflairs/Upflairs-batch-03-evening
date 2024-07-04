

let promise=new Promise((resolve,reject)=>{
    let x=9
    let y=8
    // let is_fullfill=true
    if(x>y) resolve(x)
    else reject(y)
})

// promise.then((data)=>console.log('promise fullfilled',data))

// promise.catch((err)=> console.log('promise rejected',err))

// promise
// .then((data)=>console.log('promise fullfilled',data))
// .catch((err)=> console.log('promise rejected',err))

let getData= async ()=>{
    try {
        let res=await fetch('https://jsonplaceholder.typicode.com/posts')
        let data = await res.json()
        
    } catch (error) {
        console.log(error)
    }

}


