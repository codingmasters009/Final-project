import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Register from './User/Register'
import UserManu from './User/UserManu'
import Tourdetail from './User/Tourdetail'
import About from './User/About'
import Home from './User/Home'

function Link() {
  return (
    <>
      <BrowserRouter>
        <UserManu />
        <Routes>
        <Route exact path="/" element={<Home/>}/>
          <Route exact path="/tourdetail" element={<Tourdetail/>}/>
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Link