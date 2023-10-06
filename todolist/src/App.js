import React, { useState } from "react";
import Todolist from "./components/todolist";

const App = ()=>{

  const [inputli,setInputli]=useState("");

  const [items,setitems] =  useState([]);

  const itemEv = (ev) => {
    setInputli(ev.target.value);
  };

  const liOfItem = () =>{
    setitems((oldItems) =>{
      return [...oldItems, inputli];
    });
    setInputli(""); //to make input field empty
  }
//id fetched by totlist.jsx
  const delItem = (id) =>{
    //console.log("clicked");
    setitems((oldItems)=>{
                            //we get //current data // current data id
      return oldItems.filter((arr,index)=>{
        return index !== id;
      }) 
    })
}

  return(
    <>
      <div className="main_div">
        <div className="internal_div" >
          <br/>
          <h1>TODO List</h1>
          <br/>
          <input type="text" 
          placeholder="Add An Item" 
          onChange={itemEv} 
            value={inputli}
          />
          <button onClick={liOfItem}> <i class="fa fa-plus" aria-hidden="true"></i> </button>

          <ol>
          {/*  */}
            {items.map( (itemVal,Index) =>{
              return <Todolist key={Index} 
                                id={Index} 
                                  text={itemVal}
                                  onSelect={delItem} />
            })}
          </ol>
        </div>
      </div>
    </>
  );
}


export default App;
