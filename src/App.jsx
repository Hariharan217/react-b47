import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Class from './Component/Login/Class'
import Dashboard from './Component/Login/Dashboard'
import Navigation from './Component/Navigation'
import './App.css'
import ClassDetails from './Component/Login/ClassDetails'
// import ClassList from './Component/Login/ClassList'
import Login from './Component/Login/Login'
import Leaveapplication from './Component/Login/Leaveapplication'
import Task from './Component/Login/Task'
import ForgetPassword from './Component/Login/ForgetPassword'
import Resetpassword from './Component/apirequest/request'



function App() {
  return (
    <div>
      {/* 
      <input type="datetime-local" onChange={(e)=>{
console.log(e.target.value)
      }} /> */}

      <BrowserRouter>

        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='/passwordreset/:resetToken' element={<Resetpassword />} />
          <Route path='/' element={<Navigation />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/leaveapplication' element={<Leaveapplication />} />
            <Route path='/task' element={<Task />} />


            <Route path='/class/' element={<Class />} >
              <Route path='/class/:id' element={<ClassDetails />} /></Route>
          </Route>

        </Routes>
      </BrowserRouter>


      {/* <ClassList /> */}

    </div>
  )

}

export default App