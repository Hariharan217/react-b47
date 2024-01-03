import React from 'react'

function Logout() {

    let token = "token"

    function handlelogout(){
        localStorage.removeItem(token)
    }
  return (
    <div>
        <button onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default Logout