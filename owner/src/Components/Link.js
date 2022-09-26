import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Addtour from './Admin/Addtour'
import AdminManu from './Admin/AdminManu'
import Seetour from './Admin/Seetour'
import Viewuser from './Admin/Viewuser'
function Link() {
  return (
    <BrowserRouter>
        <AdminManu />
        <Routes>
          <Route exact path="/" element={<Addtour/>}/>
          <Route exact path="/seetour" element={<Seetour/>}/>
          <Route exact path="/userdetail" element={<Viewuser/>}/>
          
        </Routes>
      </BrowserRouter>
  )
}

export default Link