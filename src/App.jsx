
import axios from 'axios'
import Addjson from './Component/Addjson';
import Deletejson from './Component/Deletejson';
import Changejson from './Component/Changejson';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './Component/Navigation';
import Homejson from './Component/Homejson';
import React, { useEffect, useState } from 'react'
function App() {

  let [detail, setDetail] = useState();
    
  useEffect(()=>{
   axios
       .get("http://localhost:3000/details")
       .then((a) => {
           setDetail(a.data);
       })
       .catch((error) => {
           console.log(error);
       })
   
  }, [])
 
  return (
    <div>
      
      <BrowserRouter>
      <Navigation />
      <Routes>
         <Route path = '/' element={<Homejson note={detail}/>} />
        <Route path = '/add' element={<Addjson/>} />
        <Route path ='/change' element = {<Changejson />} />
        <Route path ='/delete' element = {<Deletejson />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App