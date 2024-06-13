import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo3 = () => {
  const submitHandler = (data) => {
    alert("submitted...");
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log("errors...", errors);

  const validationSchema = {
    age1: {
      required: {
        value: true,
        message: "age is required*",
      },
      min:{
        value:18,
        message:"age should be greater than 18"
      }
    },
    add:{
        required:{
            value:true,
            message:"address is required*"
        },
        minLength:{
            value:5,
            message:"address should be greater than 5"
        
        },
        maxLength:{
            value:10,
            message:"address should be less than 10"
        }
    },
    phone:{
        required:{
            value:true,
            message:"phone is required*"
        },
        pattern:{
            value:/^[6-9]{1}[0-9]{9}$/,
            message:"invalid phone number"
        }
    },
    gender:{
        required:{
            value:true,
            message:"Gender is required*"
        }
    },
    email:{
        required:{
            value:true,
            message:"email is required*"
        },
        pattern:{
            value:/^[a-zA-Z0-9._%+-]+@gmail\.com$/,
            message:"invalid email"
        }
    }
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>FormDemo3</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>name</label>
          <input
            type="text"
            {...register("name", {
              required: { value: true, message: "name is required*" },
            })}
          ></input>
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label>AGE</label>
          <input type="text" {...register("age", validationSchema.age1)}></input>
          {
            errors.age && <span>{errors.age.message}</span>
          }
        </div>
        <div>
            <label>Address</label>
            <input type="text"{...register("add",validationSchema.add)}></input>
            {
                errors.add && <span>{errors.add.message}</span>
            }
        </div>
        <div>
            <label>PHONE</label>
            <input type="text" {...register("phone",validationSchema.phone)}></input>
            {
                errors.phone && <span>{errors.phone.message}</span>
            }
        </div>
        <div>
            <label>GENDER</label>
            MALE : <input type="radio" name="gender" value="male" {...register("gender",validationSchema.gender)}></input>
            FEMALE : <input type="radio" name="gender" value="female" {...register("gender",validationSchema.gender)}></input>
            {

                errors.gender && <span>{errors.gender.message}</span>
            }
        </div>
        <div>
            <label>EMAIL</label>
            <input type="text" {...register("email",validationSchema.email)}></input>
            {
                errors.email && <span>{errors.email.message}</span>
            
            }
        </div>
        
        <div>
          <input type="submit" value="submit"></input>
        </div>
      </form>

      
    </div>
  );
};
