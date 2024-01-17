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

      <div className="card" style={{ width: "14rem", display: 'flex', height: '80px' }}>        
        <div className="card-body">
          <h5 className="card-title">Task Submissions</h5>
          <p className="card-text">{temp}</p>
        </div>
      </div>
    </div>
  )
}

export default Task