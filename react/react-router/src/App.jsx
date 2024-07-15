import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Skills from './pages/Skills'
import About from './pages/About'
import Skill from './pages/Skill'
import Project from './pages/Project'
import Error404 from './pages/Error404'

function App() {
  //first install - npm i react-router react-router-dom
  //setup browser router in root component(app component)
  //all route must be inside <Routes> component

  return (
    <>
      <BrowserRouter>
        {/* <Link to={''}>Home </Link>
       <Link to={'skills'}> Skill </Link>
       <Link to={'about'}> About </Link> */}
        <NavLink to={''}>Home </NavLink>
        <NavLink to={'skills'}> Skill </NavLink>
        <NavLink to={'about'}> About </NavLink>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='skills' element={<Skills />}>
              <Route path='skill' element={<Skill/>}/>              
          </Route>
          <Route path='project/:name' element={<Project/>}/>
          <Route path='about' element={<About />} />
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
