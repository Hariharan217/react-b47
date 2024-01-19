import React, { useRef, useState } from 'react'
import { passwordchange } from '../apirequest/request'
import { useNavigate, useParams } from 'react-router-dom'


function Resetpassword() {

  const [message, setmessage] = useState()

  let navigate = useNavigate()

  let password = useRef()

  let { token } = useParams()


  async function handleclick() {
    let newpassword = password.current.value
    let obj = { token, newpassword }

    let res = await passwordchange(obj)
    setmessage(res)
  }

  function loginpage(){
    navigate('/login')
}


  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', height: '100vh', background: '#1E90ff30' }}>
      <div style={{ padding: '15px', margin: '10px', display: 'flex', flexDirection: 'column', gap: '20px', background: '#82cAFF50', boxShadow: '0px 0px 10px 5px #1E90ff' }}>
        <div>
          <p style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', fontSize: '20px', fontStyle: 'normal', color: 'green' }}>{message}</p>

          <div>
            <div>New password</div>
            <br/>
            <input style={{width: '500px'}} placeholder='enter new password..' ref={password} />
            <button onClick={handleclick}  > Submit</button>
          </div><br/>
          <div style={{ justifyContent: 'end', alignItems: 'end', display: 'flex' }} ><button className='button' onClick={loginpage}>Go to Login page</button></div>


        </div>

      </div>
    </div>

  )
}

export default Resetpassword