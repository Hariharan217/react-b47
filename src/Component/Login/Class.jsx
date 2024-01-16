
import React, { useEffect, useState } from 'react'
import getclass from '../apirequest/request'
import Logout from '../Login/Logout'
import ClassDetails from './ClassDetails'
import { Outlet, useNavigate } from 'react-router-dom'
// import ClassList from './ClassList'

function Class() {

  const [classname, setclassname] = useState([])

  let navigate = useNavigate()

  useEffect(() => { gclass() }, [])

  async function gclass() {
    let res = await getclass();
    // console.log(res)
    setclassname(res)
  }

  function pagerender(id) {
    navigate(`/class/${id}`);
  }

  return (
    <div style={{ height: '100vh', width: '85vw', justifyContent: 'right', alignItems: 'flex-start', display: 'flex ', flexDirection: 'row-reverse' }}>

      <div style={{ display: 'grid', gridTemplateColumns: '30px', width: '30vw', margin: '10px', border: '3px solid #82cAFF', padding: '10px' }}>

        {classname.map((e, i) => {
          return <div style={{ padding: '5px' }}>
            <button onClick={() => {
              pagerender(e._id)
              // navigate(`/class/${e._id}`);
            }}>{i + 1}</button>
          </div>
        })}

      </div>

      <Outlet />
      <Logout />

    </div>
  )
}

export default Class