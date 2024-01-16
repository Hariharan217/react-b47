import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Navigation() {

    let navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate('/class/659ed6f395f930b0cb40f3ce')
        }
        else {
            navigate('/login')
        }
    }, [])
    return (
        <div style={{ background: '#1E90ff30' }}><div style={{background:'#1E90ff', height:'60px' }}></div>
            <div style={{ display: 'grid', gridTemplateColumns: '15% 50%'}}>
                <div className='navdiv'>
                    {/* <div className='navele'><Link to="/login" className="nav-link active" aria-current="page">Login</Link></div> */}
                    <div className='navele'><Link to="/class/" className="nav-link active" aria-current="page">Class</Link></div>
                    <div className='navele'><Link to="/dashboard" className="nav-link active" aria-current="page">Dashboard</Link></div>
                    <div className='navele'><Link to="/student" className="nav-link active" aria-current="page">Syllabus</Link></div>
                    <div className='navele'><Link to="/leaveapplication" className="nav-link active" aria-current="page">Leave application</Link></div>
                    <div className='navele'><Link to="/task" className="nav-link active" aria-current="page">Task</Link></div>
                    <div className='navele'><Link to="/forgetpassword" className="nav-link active" aria-current="page">Forget Password</Link></div>



                </div>

                <Outlet />

            </div>
        </div>
    )
}

export default Navigation