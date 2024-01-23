
import React, { useEffect, useState } from 'react'
import { studentClassdetail } from '../apirequest/request'
import Task from './Task'

function Dashboard() {

    const [webcode, setwebcode] = useState({})

    const [studentClassname, setStudentClassname] = useState([])

    useEffect(() => { studentclasslist() }, [])

    async function studentclasslist() {

        let res = await studentClassdetail();

        setStudentClassname(res.class)

        setwebcode(res)
        // console.log(res)
    }

    

    return (

        <div className='dashboard' >
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Codecodak</h5>
                    <p className="card-text">{webcode.codecodak}</p>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Webcode</h5>
                    <p className="card-text">{webcode.webcode}</p>
                </div>
            </div>

            <Task name={studentClassname} />
        </div>

    )
}

export default Dashboard