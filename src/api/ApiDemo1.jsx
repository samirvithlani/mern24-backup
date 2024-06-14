import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {
    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])
const getApiCall = async()=>{

    const response = await axios.get("https://node5.onrender.com/user/user")
    console.log("res",response) //it will axios response....
    console.log("res.data",response.data) //it will data from api...
    console.log("message",response.data.message)
    setmessage(response.data.message)
    console.log("data array ",response.data.data)
    setusers(response.data.data)


}


  return (
    <div>
        <h1 style={{color: 'blue'}}>ApiDemo1</h1>
        <button onClick={()=>{getApiCall()}}>Get Api Call</button>
        {message}
       <table className='table table-dark'>
        <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>AGE</td>
                <td>STATUS</td>
            </tr>
        </thead>
        <tbody>
            {
                users?.map((user)=>{
                    return(<tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>{user.isActive ? "Active":"Not Active"}</td>
                    </tr>)
                })
            }
        </tbody>
       </table>
    </div>
  )
}
