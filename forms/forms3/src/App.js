import { useState } from "react";

const App = () =>{
  //passing object
  const [Fullname,setFullName] = useState({
    fname:"fname",
    lname:"lname",
    email:"email",
    phone:"phone"
  });
  
  const inputEvent = (event) =>{
    setName(event.target.value);
    console.log(event.target.name);
    console.log(event.target.value);

   // const value = event.target.value;
  // const name = event.target.name;

  //using object destructuring
  const {value , name} = event.target;
 
    setFullName((preValue)=>{
      //console.log(preValue);
      return{
        ...preValue,
        [name] : value,
      }
    })
  };

  const onSubmit =(event)=>{
    event.preventDefault(); //to prevent html form tag default behaviour
    alert("form summited");
  };

  return (
    <>
      <div className="main_div">
      <form onSubmit={onSubmit}>
        <div>
            <h1>Hello {Fullname.fname} {Fullname.lname}</h1>
            <p>{Fullname.email}</p>
            <p>{Fullname.phone}</p>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="fname"
              onChange={inputEvent}
              value={Fullname.fname}
            />
            <br/>
            <input
              type="text"
              placeholder="Enter Your Last Name"
              name="lname"
              onChange={inputEvent}
              value={Fullname.lname}
            />
            <br/>
            <input
              type="email"
              placeholder="Enter YourEmail"
              name="email"
              onChange={inputEvent}
              value={Fullname.email}
              autoComplete="none"
            />
            <br/>
            <input
              type="number"
              placeholder="Enter Your Number"
              name="phone"
              onChange={inputEvent}
              value={Fullname.phone}
            />
            <button type="submit" >Click Me</button>
          </div>
        </form>
      </div>
    </>
  );
}


export default App;

