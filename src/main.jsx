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
