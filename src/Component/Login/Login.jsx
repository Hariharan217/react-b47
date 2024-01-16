import React, { useRef } from 'react'
import { login } from '../apirequest/request'
import { useNavigate } from 'react-router-dom'


function Login() {

  let navigate = useNavigate()

  async function handleclick() {

    let detail = {
      userid: userid.current.value,
      password: password.current.value

    }

    let res =await  login(detail)
    if(res){
      localStorage.setItem("token", res)
      navigate('/class')
    }
   

    

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

        <p style={{justifyContent: 'end', alignItems: 'center', display: 'flex'}} onClick={()=>{navigate('/forgetpassword')}} >Forget password</p>
        <p style={{justifyContent: 'end', alignItems: 'center', display: 'flex'}} onClick={()=>{navigate('/forgetpassword')}}>New Registration</p> 
      </div>
      
    </div>
  )
}

export default Login