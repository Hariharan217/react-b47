import React, { useState } from 'react'
import { Passwordreset } from '../apirequest/request'

function ForgetPassword() {

    const [email, setemail] = useState()

   async function handleclick() {

  let res = await Passwordreset(email)
//   console.log(res)
        

    }
    // console.log(password)


    return (
        <div>
            <input onChange={(event) => {
                setemail(event.target.value)
            }} type='email' />
            <button onClick={handleclick} >Submit</button>
        </div>
    )
}



export default ForgetPassword
