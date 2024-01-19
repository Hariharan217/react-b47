import React, { useState } from 'react'
import { tasksubmission } from '../apirequest/request'

function ClassDetails({ name, content }) {


    const [task, settask] = useState("")

    const [message, setmessage] = useState()

    async function Submittask() {
        if (task == "") {
            alert("Submit taks in input")
        } else {
            let res = await tasksubmission(name._id)
            setmessage(res)
        }
    }
    return (
        <div style={{ width: '100vw' }}>
            <h2 style={{ padding: '5px' }}>CLASS</h2>
            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', background: '#1E90ff', height: '50px', width: '50vw', margin: '5px', padding: '1px', fontWeight: 'bold', fontSize: '20px', color: 'white', borderRadius: '10px' }}>{name.Title}</div>
            <div>
                <ol type='1'>
                    <h6 style={{ fontWeight: 'bold' }}>CONTENT</h6>
                    <div>{content.map((e) => {
                        return <li>
                            <div style={{ justifyContent: 'initial', alignItems: 'center', display: 'flex', padding: '2px' }}>{e}</div>
                        </li>
                    })}</div>
                </ol>

            </div>
            <div>
                <div><a href={name.Task}>{name.Task}</a></div><br />
                <input placeholder='Submit task' onChange={(event) => { settask(event.target.value) }} />
                <button onClick={Submittask} >Enter</button>
            </div>

            <p style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', fontSize: '20px', fontStyle: 'normal', color: 'green' }}>{message}</p>

        </div>

    )
}

export default ClassDetails