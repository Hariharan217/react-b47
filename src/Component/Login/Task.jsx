import React, { useState } from 'react'

function Task({ name }) {
  
  let temp = 0;

  name.map((e) => {

    if (e.Taskcompletion) {
      temp = temp + 1
    }

  })
  return (
    <div>

      <div className="card" style={{ width: "18rem" }}>
        {/* <img src="..." className="card-img-top" alt="..."></img> */}
        <div className="card-body">
          <h5 className="card-title">Task</h5>
          <p className="card-text">{temp}</p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    </div>
  )
}

export default Task