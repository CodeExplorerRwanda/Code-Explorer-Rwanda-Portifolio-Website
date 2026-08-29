import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
function App() {

  return (
    <BrowserRouter>
       <Routes>
           <Route path='/' element={<Nav />} />
       </Routes>
    </BrowserRouter>    
 )
}

export default App
