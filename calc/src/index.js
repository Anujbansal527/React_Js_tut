import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

let curDate = new Date();

curDate = curDate.getHours();//getting time in hr

let greeting="";
//for greeting we create empty variable value change as per confition

const cssStyle={ };
//we create an empty object use this to change value of style

if(curDate>=1 && curDate<12)
{
  greeting="Good Morning";
  cssStyle.color="Green";
}
else if(curDate>=12 && curDate<18)
{
  greeting="Good Afternoon";
  cssStyle.color="Orange";
}
else
{
  greeting="Good Night";
  cssStyle.color="Grey";
}
ReactDom.render(
<>
<div>
  <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
</div>
</>
,document.getElementById("root"));