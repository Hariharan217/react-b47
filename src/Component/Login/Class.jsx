
import React, { useEffect, useState } from 'react'
import getclass from '../apirequest/request'
// import Logout from '../Login/Logout'
import ClassDetails from './ClassDetails'

function Class() {

  const [classname, setclassname] = useState([])

  const [classobject, setclassobject] = useState({})

  const [change, setchange] = useState(0)

  const [content, setcontent] = useState([])

  const[count, setcount] = useState(0)

  useEffect(() => { gclass() }, [change])

  async function gclass() {
    let res = await getclass();

    setclassname(res)

    if(count==0){
      setclassobject(res[0])
      setcontent(res[0].Contents)
    }

  }
  return (
    <div style={{ height: '100vh', width: '85vw', justifyContent: 'right', alignItems: 'flex-start', display: 'flex ', flexDirection: 'row-reverse' }}>

      <div style={{ display: 'grid', gridTemplateColumns: '30px 30px', width: '30vw', margin: '10px', border: '3px solid #82cAFF', padding: '10px' }}>

        {classname.map((e, i) => {
          return <div style={{ padding: '5px' }}>
            <button onClick={() => {
              setcount(count+1)
              setclassobject(e)
              setcontent(e.Contents)
              setchange((pre) => {
                if (pre == 0) {
                  return 1
                } else { return 0 }
              })
            }}>{i + 1}</button>
          </div>
        })}

      </div>
      <ClassDetails name={classobject} content={content} />
      {/* <Logout /> */}
    </div>
  )
}

export default Class