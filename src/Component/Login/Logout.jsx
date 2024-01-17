import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {

  let navigate = useNavigate()

  let token = "token"

  
  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }} >
      <button >Logout</button>
    </div>
  )
}

export default Logout