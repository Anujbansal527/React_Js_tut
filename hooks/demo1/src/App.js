import React ,{useState} from "react";

const App = () =>{

  const state = useState();
  //use state always use on the top level of the function 
  //  console.log(state); //we get an array and an function
  const [count,setCount]=useState(0);
    //current data //updated data = //initial data
const IncNum = ()=>{
  setCount(count+1);
}
//after 16.8 version we get hook cincept to change state before that we use class component

  return (
    <>
      <h1> {count} </h1>
      <button onClick={IncNum}>Click me</button>
    </>
  )
}

export default App; 