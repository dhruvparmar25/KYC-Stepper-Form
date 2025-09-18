import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import BasicDetail from './Pages/BasicDetail'
import TermsDetail from './Pages/TermsDetail'
import UserDetails from './Pages/UserDetails'

import AddressDetail from './Pages/AddressDetail'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<Login/>}/>
         <Route path='/basicdetail' element={<BasicDetail />}/>
         <Route path='/termsdetail' element={<TermsDetail />}/>
         <Route path='/userdetail' element={<UserDetails/>}/>
         <Route path='/addressdetail' element={<AddressDetail/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App