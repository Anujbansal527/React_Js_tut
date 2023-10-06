import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const Fname ="Anuj";
const Lname ="Bansal";

const img1="https://images.unsplash.com/photo-1586811669752-6a0a906fa522?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80";
const img2="https://iforum-de.c.hihonor.com/uk_data/images/2020/9/21/ad52d53a-be41-49c5-a51d-79e70fea4a36.jpg?imageId=55652";
const img3="https://images.unsplash.com/photo-1586811669752-6a0a906fa522?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80";
const link="https://www.youtube.com/watch?v=z-Z5radvnOA&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=15";

//java script object
const heading={
  color:"red",
  textTansforma:"capital",
  textAlign:"center"
};


ReactDom.render(
<>
      <h1 className='heading'>{`my name is  ${Fname} ${Lname}`}</h1>

      <h1 style={heading}>change styling using object of java</h1>
      
      <h2 style={{color:'#fa9191',textAlign:"center",backgroundColor:'yellow'}}>This is inline css </h2>
      
      <div className='img-div'>
      <img src={img1} alt="Random img" />
      <img src={img2} alt="Random img" />
      <img src={img3} alt="Random img" />
      </div>
     
      <a href={link} target="_blank">Click Me</a>

  </>
   ,document.getElementById("root")
); 