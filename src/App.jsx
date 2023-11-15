import React from 'react'
import Cards from './Component.jsx/Cards'
import './App.css'

function App() {

  return (
    <div id='appid'>
      <Cards a={["Single User", "yes"]} b={["50GB Storage", "yes"]} c={["Unlimited Public Project", "yes"]} d={["Community Access", "yes"]} e={["Unlimited Private Project", "no"]} f={["Dedicated Phone Support", "no"]} g={["Free Subdomain", "no"]} h={["Monthly Status Reports", "no"]} i={["FREE", "skip"]} j={["$0/month", "skip"]} />
      <Cards a={["5 Users", "yes"]} b={["50GB Storage", "yes"]} c={["Unlimited Public Project", "yes"]} d={["Community Access", "yes"]} e={["Unlimited Private Project", "yes"]} f={["Dedicated Phone Support", "yes"]} g={["Free Subdomain", "yes"]} h={["Monthly Status Reports", "no"]} i={["PLUS", "skip"]} j={["$9/month", "skip"]} />
      <Cards a={["Unlimited Users", "yes"]} b={["50GB Storage", "yes"]} c={["Unlimited Public Project", "yes"]} d={["Community Access", "yes"]} e={["Unlimited Private Project", "yes"]} f={["Dedicated Phone Support", "yes"]} g={["Free Subdomain", "yes"]} h={["Monthly Status Reports", "yes"]} i={["PRO", "skip"]} j={["$49/month", "skip"]} />

    </div>
  )
}

export default App