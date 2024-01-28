import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Navigation from './Component/Navigation'
import './App.css'
import Login from './Component/Resetpassword/Login'
import NewRegister from './Component/Resetpassword/NewRegister'
import ForgetPassword from './Component/Resetpassword/Forgetpassword'
import Resetpassword from './Component/Resetpassword/Resetpassword'
import Dashboard from './Component/Resetpassword/Dashboard'


function App() {
  return (
    <div>

      <BrowserRouter>

        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/newregister' element={<NewRegister />} />
          <Route path='/forgetpassword' element={<ForgetPassword/>} />
          <Route path='/passwordreset/:token' element={<Resetpassword/>} />
          <Route path='/' element={<Navigation />}>
            <Route path='/dashboard' element={<Dashboard />} />
      </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )

}

export default App