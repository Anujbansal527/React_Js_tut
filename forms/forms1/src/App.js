import { useState } from "react";

const App = () =>{
  
  const [name,setName] = useState("");
  const [Fullname,setFullname] = useState("");
  const inputEvent = (event) =>{
    console.log(event);
    console.log(event.target.value);//getting value
    setName(event.target.value);
  }
  
  const onSubmit =()=>{
    setFullname(name);
  }

  return (
    <>
      <div>
        <h1>Hello {Fullname}</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={inputEvent}
          value={name}
        />
        <button onClick={onSubmit}>Click Me</button>
      </div>
    </>
  );
}

export default App;

/* 
//we can type "humko controlled component ki wajah se na likhne ki dikkat se rahat milegi"
const App = () =>{
  return (
    <>
      <div>
        <h1>Hello</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          defaultValue=" "
        />
      </div>
    </>
  );
}

export default App;
 */

/*
//using onChange Handler

const App = () =>{
  
  const inputEvent = () =>{
    console.log("Clicked");
  }

  return (
    <>
      <div>
        <h1>Hello</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={inputEvent}
        />
        <button >Click Me</button>
      </div>
    </>
  );
}

export default App;
  */

/*
//setName direct 

import { useState } from "react";

const App = () =>{
  
  const [name,setName] = useState("");

  const inputEvent = (event) =>{
    console.log(event);
    console.log(event.target.value);//getting value
    setName(event.target.value);
  }

  return (
    <>
      <div>
        <h1>Hello {name}</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={inputEvent}
        />
        <button >Click Me</button>
      </div>
    </>
  );
}

export default App;

*/