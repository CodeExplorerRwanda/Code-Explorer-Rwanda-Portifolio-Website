import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portifolio'
import Solution from './components/Solution'
import Insights from './components/Insights'
import Contact from './components/Contact'
function App() {

  return (
    <BrowserRouter>
      <Nav />
       <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/about' element={<About />} />
           <Route path='/Portfolio' element={<Portfolio />} />
           <Route path='/solution' element={<Solution />} />
           <Route path='/insights' element={<Insights />} />
           <Route path='/contact' element={<Contact />} />
       </Routes>
    </BrowserRouter>    
 )
}

export default App
