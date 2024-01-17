
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
    }

    return (

        <div style={{ display: 'flex', height: '100px', padding: '10px', margin: '10px' }}>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Codecadak</h5>
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