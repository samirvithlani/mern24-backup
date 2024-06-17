import axios from 'axios'
import React from 'react'

export const ApiDemo3 = () => {

    const postData = async () => {

        const objToSubmit ={
            name:"amit1",
            email:"amit1@gmail.com",
            status:"active",
            gender:"male"
        }

        try{
        const res = await axios.post("https://gorest.co.in/public/v2/users",objToSubmit,{
            headers:{
                "Authorization":"Bearer 87a6e693c6ad5316132fb9df78c80553c9fe17fbee4945d3704e2b55fd94c2b5"
            }
        })
        console.log(res.data)
        }catch(e){
            console.log("error...",e)
        }

    }
  return (
    <div>
        ApiDemo3
        <button onClick={()=>{postData()}}>Post Data</button>
    </div>
  )
}
