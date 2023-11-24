
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

function Changejson() {

  let teacher = useRef();
  useEffect(() => { addDetails() }, [])

  let [array, setArray] = useState([]);

  async function addDetails() {
    await axios.get(`http://localhost:3000/details/`)
      .then((responce) => {
        setArray(responce.data)
        // console.log(responce.data);
      })
  }
  let [inputaddstudent, setInputaddstudent] = useState();
  let student = useRef();

  let objecttoadd = {};
  function addstudent() {
    objecttoadd.student.push(student.current.value);
    axios
      .put(`http://localhost:3000/details/${objecttoadd.id}`, objecttoadd)

      alert("added")
  }

  function adding(event) {

    for (let index = 0; index < array.length; index++) {
      if (array[index].teacher == event.target.innerText) {
        objecttoadd = array[index];
      }
      // objecttoadd.student.push("jeeva");

    }
    setInputaddstudent(
      <div>
        <input ref={student}></input>
        <button onClick={addstudent} >Submit</button>
      </div>
    )
  }

  return (
    <div>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          TEACHER
        </button>
        <ul className="dropdown-menu">
          {array.map((ele) => {
            return <li className="dropdown-item" key={ele.id} onClick={adding} >{ele.teacher}</li>
          })}
        </ul>
      </div>{inputaddstudent}
    </div>
  )
}

export default Changejson