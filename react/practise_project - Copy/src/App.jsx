import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'


function App() {
  

  return (
   <BrowserRouter>
   <Routes>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<Home/>}/>
    <Route path='contact' element={<Home/>}/>
    <Route path='shop' element={<Home/>}/>

   </Routes>
   </BrowserRouter>
  )
}

export default App
