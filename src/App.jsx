import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './Component/User/Login';
import Logout from './Component/User/Logout';
import ForgotPassword from './Component/User/ForgetPassword';
import ResetPassword from './Component/User/ResetPassword';
import ActivationPage from './Component/User/ActivationPage';
import Dashboard from './Component/Url/Dashboard';
import GenerateUrls from './Component/Url/GenerateUrls';
import ViewUrls from './Component/Url/ViewUrls';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/signup' element={<Logout />} />
          <Route path='/signin' element={<Login />} />
         <Route path='/forgot_password' element={<ForgotPassword />} />
          <Route path='/reset_password/:token' element={<ResetPassword />} />
          <Route path='/activation_page/:token' element={<ActivationPage />} />
          <Route path='/dashboard/:id' element={<Dashboard />} />
          <Route path='/generate_url/:id' element={<GenerateUrls />} />
          <Route path='/view_url/:id' element={<ViewUrls />} />
         
          <Route path="/" element={<Navigate to="/signin" replace />} /> 
        </Routes> 

      </div>
    </BrowserRouter>
  )
}

export default App
