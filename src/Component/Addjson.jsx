import axios from 'axios'
import React, { useRef } from 'react'

function Addjson() {

let name = useRef();
let age =useRef();

function jsonfunction(){

  let details ={
    name : name.current.value,
    age : age.current.value
    
  }
  axios 
.post(`http://localhost:3000/details/`, details)
.then(response => {
    // console.log(response.data)
  })
}

  return (
    <div>
      <input ref={name}  ></input><br />
      <input ref={age} ></input><br />
      <button onClick={jsonfunction}>Add</button>
    </div>
  )
}

export default Addjson