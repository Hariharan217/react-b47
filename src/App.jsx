import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Class from './Component/Login/Class'
import Dashboard from './Component/Login/Dashboard'
import Navigation from './Component/Navigation'
import './App.css'
import Login from './Component/Login/Login'
import Leaveapplication from './Component/Login/Leaveapplication'
import Task from './Component/Login/Task'
import Syllabus from './Component/Login/Syllabus'
import NewRegister from './Component/Login/NewRegister'
import ForgetPassword from './Component/Login/Forgetpassword'
import Resetpassword from './Component/Login/Resetpassword'


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
            <Route path='/leaveapplication' element={<Leaveapplication />} />
            <Route path='/task' element={<Task />} />
            <Route path='/syllabus' element={<Syllabus />} />
            <Route path='/class/' element={<Class />} /></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )

}

export default App