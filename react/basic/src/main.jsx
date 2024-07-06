import React from 'react'
import ReactDOM from 'react-dom/client'

let element1='this is my react application'
//jsx => javascript extension
//writing html inside js
//jsx must be wrap in a single element
//every tag must be closed

let element2=<p>
  this is jsx </p>
  
let element3=<div>
  <h1>My react app <br></br> with vite</h1>
  <p>hello <br /> everyone</p>
</div>
ReactDOM.createRoot(document.getElementById('root'))
.render([element1,element2,element3])

// let rootElement=document.getElementById('root')
// let root=ReactDOM.createRoot(rootElement)
// root.render('hello everyone')



