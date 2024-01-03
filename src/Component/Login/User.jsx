import React, { useRef, useState } from 'react'
import { login } from '../request'

function user() {

  // const [name, setName] = useState()

  function handleclick() {

    let details = {
      username: username.current.value,
      password: password.current.value

    }
    login(details)

  }
  let username = useRef()
  let password = useRef()

  return (
    <div>

      <input ref={username} />
      <input ref={password} />
      <button onClick={handleclick}>Submit</button>


    </div>
  )
}

export default user