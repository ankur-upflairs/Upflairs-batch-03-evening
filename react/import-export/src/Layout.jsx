import React from 'react'
// import Header from './Header'
// import { MainContent,Footer } from './Header'
import Header,{MainContent as Content,Footer} from './Header'

function Layout() {
  return (
    <div>
      <Header/>
      {/* <MainContent/> */}
      <Content/>
      <Footer/>
    </div>
  )
}

export default Layout
