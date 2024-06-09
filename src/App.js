import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Work from './pages/Work'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Services from './pages/Services'
import About from './pages/About'
import Footer from './components/Footer'

export default function App() {
  
  return (
    <>
            <Helmet>
          <title>Amirreza Mirshafiee</title>
          <meta name="Amirreza Mirshafiee" content="Amirreza Mirshafiee" />
        </Helmet>
      <Navbar/>

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/services' element={<Services />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/work' element={<Work />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer/>
    </>
  )
}
