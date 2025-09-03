import React from 'react'
import Home from './pages/Home'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
