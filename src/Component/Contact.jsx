import React, { useState } from 'react'
import axios from 'axios'

function Contact() {

  const [name, setname] = useState()
  const [mail, setmail] = useState()
  const [mobile, setmobile] = useState()
  const [mailsubject, setmailsubject] = useState()
  const [message, setmessage] = useState()

  async function handleclick() {
    let res = await axios.post('https://b47-be-1.onrender.com', { name, mail, mobile, mailsubject, message })
     alert(res.data)
  }

  return (
    <div>
      <section className='contact' id='contact' >
        <h2 className='heading' >Contact</h2>
        <form action='#' >

          <div className='input-box' >
            <div className='input-field' >
              <input onChange={(e) => {
                setname(e.target.value)
              }} type='text' placeholder='Full name'  />
              <span className='focus' ></span>
            </div>
            <div className='input-field' >
              <input onChange={(e) => {
                setmail(e.target.value)
              }} type='text' placeholder='email address'  />
              <span className='focus' ></span>
            </div>
          </div>

          <div className='input-box' >
            <div className='input-field' >
              <input onChange={(e) => {
                setmobile(e.target.value)
              }} type='text' placeholder='Mobile number'  />
              <span className='focus' ></span>
            </div>
            <div className='input-field' >
              <input onChange={(e) => {
                setmailsubject(e.target.value)
              }} type='text' placeholder='email subject'  />
              <span className='focus' ></span>
            </div>
          </div>


          <div className='textarea-field' >
            <textarea onChange={(e) => {
              setmessage(e.target.value)
            }} name='' id='' cols={30} rows={10} placeholder='Your message' ></textarea>
            <span className='focus' ></span>
          </div>

          <div className='btn-box' >
            <button onClick={handleclick} type='submit' className='btn' color='red'>Submit</button>
          </div>
        </form>

          <div class="details">
            <a href='#' > <i class='bx bxl-gmail' ></i> <p>harikalai217@gmail.com</p></a>
            <a href='#' > <i class='bx bxs-phone-call' ></i> <p>7010445811</p></a>
            <a href='#' > <i class='bx bxs-phone-call' ></i> <p>8489658561</p></a>
          </div>
      </section >
    </div >
  )
}

export default Contact