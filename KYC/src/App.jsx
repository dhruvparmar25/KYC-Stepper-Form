import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import FirstPage from './Pages/FirstPage'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<Login/>}/>
         <Route path='/firstpage' element={<FirstPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App