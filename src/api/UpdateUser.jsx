import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

export const UpdateUser = () => {
    const id = useParams().id

    const {register,handleSubmit} = useForm({
        defaultValues:async()=>{
            const res = await axios.get("https://node5.onrender.com/user/user/"+id)
            return({
                name:res.data.data.name,
                email:res.data.data.email,
                age:res.data.data.age,
                isActive:res.data.data.isActive
            })
        }
    })
    const submitHandler = async(data) => {
        console.log("data....",data)

        try{
        const res = await axios.put("https://node5.onrender.com/user/user/"+id,data)
        console.log(res)
        }catch(e){
            console.log(e)
        
        }
    }
  return (
    <div>
        <h1>UPDATE USER</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type="text" {...register("name")}></input>
            </div>
            <div>
                <label>EMAIL</label>
                <input type="text" {...register("email")}></input>
            </div>
            <div>
                <label>AGE</label>
                <input type="text" {...register("age")}></input>
            </div>
            <div>
                <label>STATUS</label>
                <input type="text" {...register("isActive")}></input>
            </div>
            <div>
                <input type="submit"></input>
            </div>
        </form>
    </div>
  )
}
