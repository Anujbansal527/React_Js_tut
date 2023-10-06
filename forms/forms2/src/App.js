import { useState } from "react";

const App = () =>{
  
  const [name,setName] = useState("");
  
  const [lname,setlName] = useState("");
  
  const [Fullname,setFullname] = useState("");
  
  const [lFullname,setlFullname] = useState("");

  const inputEvent = (event) =>{
  
    console.log(event);
    console.log(event.target.value);//getting value
  
    setName(event.target.value);
  }

  const inputEvent2 = (event) =>{
    setlName(event.target.value);
  }

  const onSubmit =(event)=>{
    event.preventDefault(); //to prevent html form tag default behaviour
    setFullname(name);
    setlFullname(lname);
  }

  return (
    <>
      <div className="main_div">
      <form onSubmit={onSubmit}>
        <div>
            <h1>Hello {Fullname} {lFullname}</h1>
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={inputEvent}
              value={name}
            />
            <br/>
            <input
              type="text"
              placeholder="Enter Your Last Name"
              onChange={inputEvent2}
              value={lname}
            />
            <button type="submit" >Click Me</button>
          </div>
        </form>
      </div>
    </>
  );
}


export default App;

/*

//demo 1

import { useState } from "react";

const App = () =>{
  
  const [name,setName] = useState("");
  const [Fullname,setFullname] = useState("");
  const inputEvent = (event) =>{
    console.log(event);
    console.log(event.target.value);//getting value
    setName(event.target.value);
  }
  
  const onSubmit =(event)=>{
    event.preventDefault(); //to prevent html form tag default behaviour
    setFullname(name);
  }

  return (
    <>
      <div className="main_div">
      <form onSubmit={onSubmit}>
        <div>
            <h1>Hello {Fullname}</h1>
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={inputEvent}
              value={name}
            />
            <br/>
            <button type="submit" >Click Me</button>
          </div>
        </form>
      </div>
    </>
  );
}


export default App;
 */