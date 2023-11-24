import axios from 'axios';
import React, { useRef } from 'react'

function Addjson() {
  function addteacher() {
    // console.log();

    let addobject = {
      teacher: addteachername.current.value,
      student: []
    }
     axios
     .post('http://localhost:3000/details', addobject)

     alert("added")
  }

  let addteachername = useRef();
  return (
    <div>
      <input ref={addteachername} placeholder='Teacher to add' ></input>
      <button onClick={addteacher} >Submit</button>

    </div>
  )
}

export default Addjson