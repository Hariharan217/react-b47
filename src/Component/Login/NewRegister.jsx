import React, { useRef } from 'react'
import { newregistration } from '../apirequest/request'

function NewRegister() {

     function registration(){

        let details = {
            userid: userid.current.value,
            password: password.current.value
      
          }
    //   console.log(details)
           newregistration(details)
          
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


      <div style={{ flexDirection: 'column', alignItems: 'right', display: 'flex' }}><button className='button' onClick={registration}>Submit</button></div>


    </div>

  </div>
  )
}

export default NewRegister