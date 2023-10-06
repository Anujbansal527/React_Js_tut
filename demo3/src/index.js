import React from "react";
import ReactDom from "react-dom";

//JSX Expressions
const Fname ="Anuj";

ReactDom.render(
  <>
      <h1>Hellow World {Fname}</h1>
      <p>thisis para graph</p>
      <h2>other lines</h2>
  </>
   ,document.getElementById("root")
);

/*
//using template literals
const Fname ="Anuj";
const Lname ="Bansal";

ReactDom.render(
  <>
      <h1>{`my name is  ${Fname} ${Lname}`}</h1>
      <p>template lir=terals</p>
      <h2>other lines</h2> 
  </>
   ,document.getElementById("root")
); 
*/

/*
//Attributes in React JSX

const Fname ="Anuj";
const Lname ="Bansal";
const img="path of the image";

ReactDom.render(
  <>        //this must be in camelCase convention
      <h1 contentEditable="true">{`my name is  ${Fname} ${Lname}`}</h1>
      <p>template lir=terals</p>
      <h2>other lines</h2> 
      <img src={img} alt="Random img" />
      //self closing tag
  </>
   ,document.getElementById("root")
); 
 */