import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Navigation() {

    let navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate('/dashboard')
        }
        else {
            navigate('/login')
        }
    }, [])

    function handlelogout() {
        localStorage.removeItem("token")
        navigate('/login')
    }

    return (
        <div style={{ background: '#1E90ff30', height:'200vh', width:'100vw' }}>
            <div style={{ background: '#1E90ff', height: '60px' }}></div>
            <div className='navcontainer' style={{ display: 'grid', gridTemplateColumns: '15% 50%' }}>
                <div className='navmedia' >
                    
                    <div className='navele'><div onClick={handlelogout} className="nav-link active" aria-current="page">Logout</div></div>
                </div>

                <Outlet />

            </div>
        </div>
    )
}

export default Navigation