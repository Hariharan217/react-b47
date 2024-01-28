import React, { useState } from 'react'
import  Passwordreset  from '../Services/Request'
import { useNavigate } from 'react-router-dom'

function ForgetPassword() {

    const [message, setmessage] = useState()

    let navigate = useNavigate()

    const [email, setemail] = useState()

    async function handleclick() {

        let res = await Passwordreset(email)

        setmessage(res)
    }

    function loginpage() {
        navigate('/login')
    }

    return (
        <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', height: '100vh', background: '#1E90ff30' }}>
            <div style={{ padding: '15px', margin: '10px', display: 'flex', flexDirection: 'column', gap: '20px', background: '#82cAFF50', boxShadow: '0px 0px 10px 5px #1E90ff' }}>
                <div>
                    <p style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', fontSize: '20px', fontStyle: 'normal', color: 'red' }}>{message}</p>

                    <div>
                        <p>Email</p>
                        <input style={{ width: '500px' }} onChange={(event) => {
                            setemail(event.target.value)
                        }} type='email' placeholder='email...' />
                        <br /><br />
                        <button onClick={handleclick} >Submit</button>
                    </div>

                    <div style={{ justifyContent: 'end', alignItems: 'end', display: 'flex' }} ><button className='button' onClick={loginpage}>Go to Login page</button></div>


                </div>

            </div>
        </div>

    )
}



export default ForgetPassword