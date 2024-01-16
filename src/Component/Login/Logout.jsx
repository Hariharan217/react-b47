import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {

  let navigate = useNavigate()

    let token = "token"

    function handlelogout(){
        localStorage.removeItem(token)
        navigate('/login')
    }
  return (
    <div style={{justifyContent: 'center', alignItems: 'flex-end', display: 'flex'}} >
        <button  onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default Logout