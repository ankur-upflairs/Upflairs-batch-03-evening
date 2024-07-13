import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseState from './UseState'
import Useimmerhook from './Useimmer'
import UseEffecthook from './UseEffecthook'
import UseRefhook from './UseRefhook'

function App() {
  //hooks => allow functional components to use react features
  //hooks must have use keyword before them
  //hooks must be used inside a funcational component
  //hooks must be on top in component
  //we can't use hooks inside conditions and loops 
  return (
    <>
     {/* <UseState/> */}
     {/* <Useimmerhook/> */}
     {/* <UseEffecthook/> */}
     <UseRefhook/>
    </>
  )
}

export default App
