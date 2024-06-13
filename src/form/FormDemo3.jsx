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
          <input type="submit" value="submit"></input>
        </div>
      </form>
    </div>
  );
};
