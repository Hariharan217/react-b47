import React, { useRef, useState } from 'react'
import { login } from '../apirequest/request'
import { useNavigate } from 'react-router-dom'
import NewRegister from './NewRegister'

function Login() {

  const [message, setmessage] = useState()



  let navigate = useNavigate()

  async function handleclick() {

    let detail = {
      userid: userid.current.value,
      password: password.current.value

    }

    let res = await login(detail)

    if (res.token) {
      localStorage.setItem("token", res.token)
      navigate('/class')
    } else {
      setmessage(res)
    }

  }

  function newregister() {
    navigate('/newregister')
  }

  function passwordreset() {
    navigate('/forgetpassword')
  }

  let userid = useRef()
  let password = useRef()

  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', height: '100vh', background: '#1E90ff30' }}>
      <div style={{ padding: '15px', margin: '10px', display: 'flex', flexDirection: 'column', gap: '20px', background: '#82cAFF50', boxShadow: '0px 0px 10px 5px #1E90ff' }}>
        <div>
          <p style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', fontSize: '20px', fontStyle: 'normal', color: 'red' }}>{message}</p>
          <p>Email</p>
          <input style={{ width: '500px' }} ref={userid} placeholder='email..' /></div>
        <div>
          <p>Password</p>
          <input style={{ width: '500px' }} ref={password} placeholder='password...' type='password' /></div>


        <div style={{ flexDirection: 'column', alignItems: 'right', display: 'flex' }}><button className='button' onClick={handleclick}>Login</button></div>

        <div style={{ justifyContent: 'end', alignItems: 'end', display: 'flex' }}><button onClick={newregister} >New register</button></div>

        <div style={{ justifyContent: 'end', alignItems: 'end', display: 'flex' }} ><button onClick={passwordreset} >Forget password</button></div>

      </div>

    </div>
  )
}

export default Login