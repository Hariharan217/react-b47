const Hello = (props) =>{

  return(
<div>
<p>Hello {props.name}, your age is {props.age}</p>
</div>
  )
}

const App = () =>{
  return(
    <div>
      <Hello name='hari' age='25'/>
    </div>
  )
}
export default App;