import React, { useRef } from 'react'
import axios from 'axios'

function Deletejson() {

    function deletefunction(){
      console.log(del.current.value)

      axios
      .delete(`http://localhost:3000/details/${del.current.value}`)
    
    }

    let del =useRef();


  return (
    <div>
        <input ref={del}></input>
        <button onClick={deletefunction}>Delete</button>
    </div>
  )
}

export default Deletejson