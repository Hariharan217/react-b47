import React, { useRef } from 'react'
import axios from 'axios'

function Changejson() {

    let name = useRef();
    let age = useRef();
    let id = useRef();

    function changesfunction(){

      let changes = {
        name :name.current.value,
        age :age.current.value,
        id :id.current.value
      }

      axios
      .put(`http://localhost:3000/details/${changes.id}`, changes)

      // .then(responce =>{
      //   console.log(responce);
      // })
    }
  return (
    <div>

        <input ref={name}></input><br />
        <input ref={age}></input><br />
        <input ref={id}></input><br />

        <button onClick={changesfunction}>Changes</button>
    </div>
  )
}

export default Changejson