import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as ap from './App'
//for all AT once

ReactDOM.render(
    <>
      <ol>
        <li>{ap.default}</li>
        <li>{ap.Youtube}</li>
        <li>{ap.favprog}</li>
        <li>{ap.name}</li>
        <li>{ap.names}</li>
      </ol>
    </>,document.getElementById('root')
);

/*
import myfav {Youtube,favprog,name,names}
//according to our need

ReactDOM.render(
    <>
      <ol>
        <li>{myfav}</li>
        //default export Youtuber as myfav
        <li>{Youtube}</li>
        <li>{favprog}</li>
        <li>{name}</li>
        <li>{names}</li>
      </ol>
    </>,document.getElementById('root')
);

*/