import React, { useEffect, useState } from 'react'
import { leaveapply } from '../apirequest/request'
import getclass from '../apirequest/request'


function Leaveapplication() {
    async function handleclick(id) {

        leaveapply(id)
    }

    const [classes, setclasses] = useState([])

    // const [message, setmessage] = useState([])

    useEffect(() => { goneclass() }, [])

    async function goneclass() {
        let result = await getclass()
        setclasses(result)
        // setmessage(res)
    }
    return (
        <div>
            <div className="dropdown">
                <span>Select class for leave :  </span>
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    --Class--
                </button>
                <ul style={{ overflow: 'scroll', height: '250px' }} className="dropdown-menu">{classes.map((e) => {
                    return <li onClick={() => { handleclick(e._id) }} ><a className="dropdown-item">{e.Title} </a></li>
                })}

                </ul>
            </div>
            <p style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', fontSize: '20px', fontStyle: 'normal', color: 'green' }}>{message}</p>
        </div>
    )
}
export default Leaveapplication 