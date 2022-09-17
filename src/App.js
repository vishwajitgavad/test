import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'

export default function App() {

  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='*' element={<PageNotFound />}></Route>
    </Routes>
  </BrowserRouter>
}
