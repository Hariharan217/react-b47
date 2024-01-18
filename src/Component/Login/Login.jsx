import React, { useRef } from 'react'
import { login } from '../apirequest/request'
import { useNavigate } from 'react-router-dom'
import NewRegister from './NewRegister'

function Login() {

  let navigate = useNavigate()

  async function handleclick() {

    let detail = {
      userid: userid.current.value,
      password: password.current.value

    }

    let res = await login(detail)
    if (res) {
      localStorage.setItem("token", res)
      navigate('/class')
    }

  }
  
  function newregister(){
   navigate('/newregister')
  }

  let userid = useRef()
  let password = useRef()

  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', height: '100vh', background: 'white' }}>
      <div style={{ padding: '15px', margin: '10px', display: 'flex', flexDirection: 'column', gap: '20px', background: '#82cAFF50', boxShadow: '0px 0px 10px 5px #1E90ff' }}>
        <div>
          <p>Email</p>
          <input style={{ width: '500px' }} ref={userid} placeholder='email..' /></div>
        <div>
          <p>Password</p>
          <input style={{ width: '500px' }} ref={password} placeholder='password...' type='password' /></div>


        <div style={{ flexDirection: 'column', alignItems: 'right', display: 'flex' }}><button className='button' onClick={handleclick}>Login</button></div>

        <div style={{justifyContent:'end', alignItems:'end', display:'flex'}}><button onClick={newregister} >New register</button></div>

        {/* <div style={{justifyContent:'end', alignItems:'end', display:'flex'}} ><button>Forget password</button></div> */}

      </div>

    </div>
  )
}

export default Login