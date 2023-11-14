

import Addjson from './Component/Addjson';
import Deletejson from './Component/Deletejson';
import Changejson from './Component/Changejson';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './Component/Navigation';
import Homejson from './Component/Homejson';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Homejson />} />
          <Route path='/add' element={<Addjson />} />
          <Route path='/change' element={<Changejson />} />
          <Route path='/delete' element={<Deletejson />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App