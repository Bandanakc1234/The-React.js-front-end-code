import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import First from './First'
import Home from './component/pages/Home'
import Login from './component/pages/Login'
import Signup from './component/pages/Signup'
import About from './component/pages/[About]/About'

const Myroutes = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/first" element ={<First/>} />

        <Route path="/login" element ={<Login/>} />
        <Route path="/signup" element ={<Signup/>} />

        <Route path="/about/:user_id" element ={<About/>} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Myroutes
