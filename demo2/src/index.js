var React = require("react");
var ReactDom = require("react-dom");

ReactDom.render(
    <h1>Hellow World</h1>
    ,document.getElementById("root")
)

/*
other way to implement in morden js

import React from "react";
imoprt ReactDom from "react-dom";

*/

/*
render multiple JSX element in react

ReactDom.render(
    <div>
        <h1>Hellow World</h1>
        <p>thisis para graph</p>
        <h2>other lines</h2>
    </div> 
     ,document.getElementById("root")
)
*/

/*
render multiple JSX element in react USING array of elements ....it return array of elements

ReactDom.render(
    [
        <h1>Hellow World</h1>,
        <p>thisis para graph</p>,
        <h2>other lines</h2>, 
    ]
     ,document.getElementById("root")
)
*/

/*
render multiple JSX element in react Using React.fragment

ReactDom.render(
    <React.fragment>
        <h1>Hellow World</h1>
        <p>thisis para graph</p>
        <h2>other lines</h2>
    </React.fragment>
     ,document.getElementById("root")
)
*/

/*
render multiple JSX element in react Using React.fragment's Synthetic sugar form

ReactDom.render(
    <>
        <h1>Hellow World</h1>
        <p>thisis para graph</p>
        <h2>other lines</h2>
    </>
     ,document.getElementById("root")
)
*/

/**********************************************************************************/
//challange
/*
ReactDom.render(
    <>
        <ol>
        <li>NAME</li>
        <li>NAME2</li>
        <li>NAME3</li>
        <li>NAME4</li>
        </ol>
    </>
     ,document.getElementById("root")
)

*/