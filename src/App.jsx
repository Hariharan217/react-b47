const App = () =>{

  
  const now = new Date();
  console.log(now);
  return(
    <div>
      <p>Hello World! {now.toString()}</p>
    </div>
  )
}
export default App;