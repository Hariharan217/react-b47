import React, { useState } from 'react'
import Navigation from './Component/Navigation'
import Header from './Component/Header'
import Section from './Component/Section'
import { CardProvider } from './Component/Context';
import Footer from './Component/Footer';


function App() {

  const [count, setCount] = useState(0);

  

  return (
   <>
   <CardProvider value={[count, setCount]}>
   <Navigation />
   <Header />
   <Section />
   <Footer />
   </CardProvider>

   </>
  )
}

export default App