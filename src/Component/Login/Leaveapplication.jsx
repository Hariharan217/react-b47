import React, { useEffect, useRef, useState } from 'react'
import { leaveapply } from '../apirequest/request'
import getclass from '../apirequest/request'
import { useNavigate } from 'react-router-dom'

 function Leaveapplication() {
   

    

   async function handleclick(id){
       
    leaveapply(id)
    }

const [classes, setclasses] = useState([])

useEffect(()=>{goneclass()},[])

async function goneclass() {
    let res = await getclass()
    setclasses(res)
    
}
    return (
        <div>
            <div className="dropdown">
                <span>Select class for leave :  </span>
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    --Class--
                </button>
                <ul style={{overflow:'scroll', height:'250px'}} className="dropdown-menu">{classes.map((e)=>{
                       return  <li onClick={()=>{handleclick(e._id)}} ><a className="dropdown-item">{e.Title} </a></li>
                    })}
                   
                </ul>
            </div>




        </div>
    )
}
export default Leaveapplication 