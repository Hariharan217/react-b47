import React, { useRef, useState } from 'react'
import { newregistration } from '../apirequest/request'
import { useNavigate } from 'react-router-dom'

function NewRegister() {

  const [message, setmessage] = useState()

  let navigate = useNavigate()

  async function registration() {

    let details = {
      userid: userid.current.value,
      password: password.current.value

    }
    let res = await newregistration(details)

    setmessage(res)


  }

  function loginpage() {
    navigate('/login')
  }

  let userid = useRef()
  let password = useRef()

  return (
    <div style={{ background: '1E90ff70' }}>
      <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', height: '100vh', background: '1E90ff' }}>
        <div style={{ padding: '15px', margin: '10px', display: 'flex', flexDirection: 'column', gap: '20px', background: '#82cAFF50', boxShadow: '0px 0px 10px 5px #1E90ff' }}>
          <div>
            <p style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', fontSize: '20px', fontStyle: 'normal', color: 'red' }}>{message}</p>
            <p style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', fontSize: '30px', fontStyle: 'normal', color: '#1E90ff' }}>Register</p>
            <p>Email</p>
            <input style={{ width: '500px' }} ref={userid} placeholder='email..' /></div>
          <div>
            <p>Password</p>
            <input style={{ width: '500px' }} ref={password} placeholder='password...' type='password' /></div>


          <div style={{ flexDirection: 'column', alignItems: 'right', display: 'flex' }}><button style={{color:'white', fontSize:'20px'}} className='button' onClick={registration}>Register</button></div>

          <div style={{ justifyContent: 'end', alignItems: 'end', display: 'flex' }}><button onClick={loginpage}>Already have an account</button></div>


        </div>

      </div>
    </div>
  )
}

export default NewRegister