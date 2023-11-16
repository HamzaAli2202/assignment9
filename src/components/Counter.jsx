import React,{ useState } from "react";
export const Counter =()=>{
    const [data,setData]=useState(0);
    

    return(
        <div className="sub">
            <h1>Counter</h1>
        <button className="btn" onClick={()=>setData(data-1)}>-</button>
       <span><h1>{data}</h1></span> 
        <button className="btn" onClick={()=>setData(data+1)}>+</button>
        </div>
    )
}