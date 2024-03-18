import React, { useContext, useState } from 'react'
import Child from './Component/Child'
import {TestProvider} from './Component/Contextinformation'

// console.log(TestProvider)

function App() {

const[Array, setArray] = useState(0)



let fun = {
  handleclick(){setArray(Array + 1)},
  minus(){setArray(Array - 1)}
}


function handleclick(){
  setArray(Array + 1)
}

function minus(){
  setArray(Array - 1)
}

  return (
   <>

   <TestProvider value={fun} >
    <Child />
   </TestProvider>

   {/* <button onClick={} >Submit</button> */}

   <div>{Array}</div>
   
   </>
  )
}

export default App

import React from 'react'
import { useReducer } from 'react';

function App() {

  let kadaikar = (porul, seyal)=>{
    switch(seyal.type){
      case"vanguthal": return porul-1;
      case"thiruputhal": return porul+1;
      default: return porul;
    }
  }

  const[cake, customer]= useReducer(kadaikar, 10)  // 10 porul kadaikar // seyal
  const[bun, customer1] = useReducer(kadaikar, 20)

  return (
    <div>
      {bun}
      <button onClick={()=>customer1({type: "vanguthal"})} >vanguthal</button>/// seyal . type
      <button onClick={()=>customer1({type: "thiruputhal"})} >thiruputhal</button>
      <button onClick={()=>customer1({type: "vedikai"})} >vedikai</button>
    </div>
  )
}

export default App

import React, { useState } from 'react'
import Child from './Component/Child'
import { TestProvider } from './Component/Contextinformation'
import Child1 from './Component/Child1'

function App() {

    const[arr, setarr] = useState(0)

    function handleclick(){
        setarr(arr + 1)
    }

    function minus(){
        setarr(arr - 1)
    }

  return (
    <>
    
        <TestProvider value={{handleclick,minus,arr}}>
            <Child  />
        </TestProvider>
        <TestProvider value="hi" >
        <Child1 />
        </TestProvider>
    </>
   
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {combineReducers} from 'redux' 


const counter = (state = 1, action) => {
  switch(action.type){
      case "INCREMENT":
          return state + 1
      case "DECREMENT":
          return state - 1
      default: 
          return state
  }
}
const rootReducer = combineReducers({
 
  counter
})

const store = createStore(
  rootReducer
   
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
   <Provider store={store} >
    <App  />
   </Provider>
     {/* <App /> */}
  </>,
  
)

xport default function Child1() {

  let action = useDispatch()
  return (
    <div>
       <button onClick={()=>{action({type: "DECREMENT"})}}>Add</button>
    </div>

  )
}

