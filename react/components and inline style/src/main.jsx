import React from 'react'
import ReactDOM from 'react-dom/client'

//functional component=> components are normal function but 
//its name start with capital letter
//functional components always return jsx
//curly bracket in jsx => javascript inside html
//dont use if-else and loop inside curly brackets


function Header(){
  let x=45
 let name='sunil bhardwaj'
  return <div  style={{color:'red',fontSize:'40px'  }} >
    this is header {x +6}
    <p>{name}</p>
  </div>
}
function MainCotent(){
  let inlineStyle={
    backgroundColor:'tan',
    color:'blue'
  }

  return <div style={inlineStyle}>
    <h1>this is main content</h1>
  </div>
}
function Footer(){
  return <div>
    <p>this footer</p>
  </div>
}

function Layout(){
  return <div>
    <Header></Header>
    <MainCotent/>
    <Footer/>
  </div>
}
// when we use/show a fn component than use it as a tag 
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Header></Header>
// )
ReactDOM.createRoot(document.getElementById('root')).render(
  <Layout/>
)
