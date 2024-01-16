// import React, { useEffect } from 'react'
// import Login from './Component/Login/Login'
// import { Route, Router, Routes} from "react-router-dom";
// import Class from './Component/Login/Class';

// function App() {

//   // let navigate = useNavigate()
//   // let token = localStorage.getItem("token")
//   // console.log(token)
//   // useEffect(() => {
//   //   if (token) {
//   //     navigate('/rooms')
//   //   } else {
//   //     navigate('/')
//   //   }
//   // }, [])

//   return (

//     <div>


      {/* <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Class />} />
        </Routes>
      </Router> */}
//     </div>

//   )
// }

// / useEffect(() => {

  //     getclass() 

  //     .then ((res)=>{
  //       console.log(res)
  //     })

    
  
  // }, [])




// export default App


// import React, { useEffect, useState } from 'react'
// import studentClassdetail from '../apirequest/request'

// function Studentclass() {

//     const [studentClassname, setStudentClassname] = useState({})

//     useEffect(()=>{studentclasslist()}, [])

//     async function studentclasslist(){
        
//         let [res] = await studentClassdetail();
//         setStudentClassname(res)
      
//         }

//         console.log(studentClassname)

//   return (

    
//     <div></div>
//   )
// }

// export default Studentclass