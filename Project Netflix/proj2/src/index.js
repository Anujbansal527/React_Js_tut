import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import Card from "./Card"
import Sdata from "./Sdata";

//arraymap(function(value"array",index,arrayname"whatname of array we paas") )
//using fat arrow function with in-line function

ReactDOM.render(
  <>
  <h2 className="heading_style">LIST OF NETFLIX SERIES</h2>
    {Sdata.map( 
      (val)=>{
        return(
    <Card
      imgsrc={val.imgscr}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
  }
  )
  }
   </>
   ,document.getElementById("root"));
