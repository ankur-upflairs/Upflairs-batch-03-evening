let event=require('events')

let eventEmitter=new event()

// eventEmitter.on('click',function(){
//     console.log('click event occured')
// })
let show=(a)=>console.log('hello everyone',a)
eventEmitter.on('click',show)
// eventEmitter.once('click',()=>console.log('this listener runs only once'))
// eventEmitter.emit('click')
// eventEmitter.removeListener('click',show)
// eventEmitter.emit('click')
// eventEmitter.prependListener('click',show)

eventEmitter.emit('click','ankit')
















