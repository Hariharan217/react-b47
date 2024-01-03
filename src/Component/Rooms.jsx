
import React, { useEffect } from 'react'
import getrooms from '../Component/request'
import Logout from './Login/Logout'

function Rooms() {


    useEffect(()=>{getrooms()}, [])

  return (
    <div>
        <Logout />
    </div>
  )
}

export default Rooms