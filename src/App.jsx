import React from 'react'
import "./App.css"
import Navigation from './Component/Navigation'
import Home from './Component/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Component/About'
import Contact from './Component/Contact'
import Experience from './Component/Experience'
import Portfolio from './Component/Portfolio'   
import Skill from './Component/Skill'

function App() {
    return (
        <div className='main' >
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/experience' element={<Experience />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/skill' element={<Skill />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App