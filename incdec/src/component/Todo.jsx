import React, { useState } from "react";
import "./Todo.css";

//add material ui componenets
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const Todo = () =>{
    const [num,setNum] =useState(0);

    const Inc = () =>{
        
        setNum(num+1);
    }

    const Dec = () =>{
        if(num>0){
        setNum(num-1);
        }
        else{
            setNum(0);
            alert("No Limit Exists");
        }
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>{num}</h1>
                    <div className="btn_div">
                        <button onClick={Inc}><AddIcon/></button>
                        <button onClick={Dec}><DeleteForeverIcon/></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Todo;