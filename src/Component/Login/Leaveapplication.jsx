import React, { useEffect, useState } from 'react'
import { leaveapply } from '../apirequest/request'
import getclass from '../apirequest/request'


function Leaveapplication() {

    const [message, setmessage] = useState()

    async function handleclick(id) {
       let res = await leaveapply(id)
       setmessage(res)
    }


    const [classes, setclasses] = useState([])

    useEffect(() => { goneclass() }, [])

    async function goneclass() {
        let res = await getclass()
        setclasses(res)
       
    }
    return (
        <div className='dashboard' >
            <div className="dropdown">
                <span>Select class for leave :  </span>
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    --Class--
                </button>
                <ul style={{ overflow: 'scroll', height: '250px' }} className="dropdown-menu">{classes.map((e) => {
                    return <li onClick={() => { handleclick(e._id) }} ><a className="dropdown-item">{e.Title} </a></li>
                })}
                </ul>
                <p style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', fontSize: '20px', fontStyle: 'normal', color: 'green' }}>{message}</p>
            </div>
            
        </div>
    )
}
export default Leaveapplication 