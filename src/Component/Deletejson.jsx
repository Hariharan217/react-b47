import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

function Deletejson() {

  let [inputdeletestudent, setInputdeletestudent] = useState();

  let deletestudent = useRef();

  let objecttodelete = {};

  function deletestudents() {

    for (let index = 0; index < objecttodelete.student.length; index++) {
      if (deletestudent.current.value == objecttodelete.student[index]) {
        objecttodelete.student.splice(index, 1);
        // console.log(objecttodelete.student);

        axios
      .put(`http://localhost:3000/details/${objecttodelete.id}`, objecttodelete)
      alert("deleted")
      }
      

    }

    // console.log(deletestudent.current.value); 
    // deletestudent.current.value == objecttodelete.student fruits.splice(1, 2);
  }

  function deletingstudent(event) {

    for (let index = 0; index < array.length; index++) {
      if (array[index].teacher == event.target.innerText) {
        objecttodelete = array[index];
      }
    }
    // console.log(objecttodelete.student);
    setInputdeletestudent(
      <div>
        <input ref={deletestudent}></input>
        <button onClick={deletestudents} >Submit</button>
      </div>
    )
  }

  useEffect(() => { responcefunction() }, []);

  let [array, setArray] = useState([]);
  async function responcefunction() {
    await axios
      .get('http://localhost:3000/details')
      .then((responce) => {
        // console.log(responce.data);
        setArray(responce.data);
      })
  }
  function deleting(event) {

    for (let index = 0; index < array.length; index++) {
      if (array[index].teacher == event.target.innerText) {
        axios
          .delete(`http://localhost:3000/details/${array[index].id}`)
      }
    }
  }

  return (
    <div style={{display:'flex'}}>
      <div >
        <div className="dropdown" >
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            DELETE TEACHER
          </button>
          <ul className="dropdown-menu">
            {array.map((ele) => {
              return <li className="dropdown-item" key={ele.id} onClick={deleting} >{ele.teacher}</li>
            })}
          </ul>
        </div>
      </div><br />
      <div className='ms-5'>
        <button className="btn btn-secondary dropdown-toggle d-inline-flex" type="button" data-bs-toggle="dropdown" aria-expanded="false" >SELECT TEACHER TO DELETE STUDENT</button>
        <ul className="dropdown-menu">
          {array.map((ele) => {
            // console.log(ele.teacher);
            return <li className="dropdown-item" key={ele.id} onClick={deletingstudent} >{ele.teacher}</li>
          })}
        </ul>

      </div>{inputdeletestudent}

    </div>
  )
}

export default Deletejson