import React, { useState } from 'react'

export const UseStateDemo = () => {

    //var count = 0;
    var [count,setCount] = useState(0)
    //const [isActive, setisActive] = useState(false);
    //const [users, setusers] = useState([])
    //const [emp, setemp] = useState({})
    //count -->state variable
    //setCount --> function : to update the state variable
    //0 --> initial value of state variable
    const increment = ()=>{
        //count++;
        setCount(count+1);
        console.log("Count = ",count);
    }
  return (
    <div>
        <h1>USE STATE DEMO</h1>
        <h2>Count = {count}</h2>
        <button onClick={()=>{increment();}}>INC</button>
    </div>
  )
}
