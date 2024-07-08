import React,{Fragment} from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Students from './Students'

function App() {
  const [count, setCount] = useState(0)
  // fragements => is replacement of extra div due to jsx 
  return (
  //  <React.Fragment>
  //   hello every buddy
  //  </React.Fragment>

    // <Fragment>
    //   hello everyone
    // </Fragment>
    //syntatic suger form (short form) of react fragments
    <>
    <Students/>
    </>
  )
}

export default App
