import React, { useState } from 'react'

export const FormDemo1 = () => {

    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const firstNameHandler = (event)=>{
        //console.log(event)
        console.log(event.target.value)
        setfirstName(event.target.value)
    }

    const submitHandler = ()=>{
        alert("First Name : "+firstName+" Last Name : "+lastName)
    }
  return (
    <div>
        <h1 style={{color:"red"}}>Form Demo 1</h1>
        <div>
            <div>
                <label>FIRST NAME</label>
                <input type="text" onChange={(event)=>{firstNameHandler(event)}}></input>
                {firstName}
            </div>
            <div>
                <label>LAST NAME</label>
                <input type="text" onChange={(event)=>{setlastName(event.target.value)}}></input>
                {lastName}
            </div>
            <div>
                {/* <input type="submit" value="Submit"></input> */}
                <button onClick={()=>{submitHandler()}}>Submit</button>
            </div>
        </div>
    </div>
  )
}
