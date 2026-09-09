import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portifolio'
import Solution from './components/Solution'
import Insights from './components/Insights'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './components/404-not-found'
import TermsOfService from './components/TermsOfUse'
import PrivacyPolicy from './components/PrivancyPolicy'
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
           <Route path='/terms' element={<TermsOfService />} />
           <Route path='/privancy' element={<PrivacyPolicy />} />
           <Route path='*' element={<NotFound />} />
       </Routes>
       <Footer />
    </BrowserRouter>    
 )
}

export default App
