import { Component } from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './Components/Navbar/index'
import Index from './Components/index'
import Contact from './Components/Contact/index'

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
