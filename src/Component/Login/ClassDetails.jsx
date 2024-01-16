import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { getoneclass } from '../apirequest/request'
import { tasksubmission } from '../apirequest/request'

function ClassDetails(props) {

    console.log(props)

    
    const [element, setelement] = useState({})

    const [content, setcontent] = useState([])

    let id = useParams()
    // console.log(id)
    const [change, setchange] = useState()
    // setchange(id)

    useEffect(() => { goneclass() }, [])

    async function goneclass() {
        let res = await getoneclass(id)
        setelement(res)
        setcontent(res.Contents)
        
    }
    function task(){
        tasksubmission(id)
    }
    return (
        <div style={{ width: '100vw' }}>
            <h2 style={{ padding: '5px' }}>CLASS</h2>
            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', background: '#1E90ff', height: '50px', width: '50vw', margin: '5px', padding: '1px', fontWeight: 'bold', fontSize: '20px', color: 'white', borderRadius: '10px' }}>{element.Title}</div>
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
                <div><a>https://docs.google.com/document/d/1QznT1zM4mI6dG0TODx5Xjs1GquMoSHO3xZ1USDnVM-w/edit?usp=sharing</a></div>
                <button onClick={task} >Submit Task</button>
            </div>

        </div>

    )
}

export default ClassDetails