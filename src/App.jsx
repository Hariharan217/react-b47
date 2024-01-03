import React, { useEffect } from 'react'
import User from './Component/Login/user'
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import Rooms from './Component/Rooms';

function App() {

  let navigate = useNavigate()
  let token = localStorage.getItem("token")
  console.log(token)
  useEffect(() => {
    if (token) {
      navigate('/rooms')
    } else {
      navigate('/')
    }
  }, [])

  return (

    <div>

      <Router>
        <Routes>
          <Route path='/' element={<User />} />
          <Route path='/login' element={<Rooms />} />
        </Routes>
      </Router>
    </div>

  )
}


export default App