import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo2 = () => {
  //useForm

  const { register, handleSubmit } = useForm();
  //register is used to register the input fields, it is an object
  //handleSubmit is used to submit the form, it is a function
  const submitHandler = (data) => {
    console.log("submit handler...", data);
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>Form Demo 2</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>FIRST NAME</label>
          <input type="text" {...register("firstName")}></input>
        </div>
        <div>
          <label>LAST NAME</label>
          <input type="text" {...register("lastName")}></input>
        </div>
        <div>
          <label>AGE</label>
          <input type="text" {...register("age")}></input>
        </div>
        <div>
            <label>GENDER</label>
            <br/> MALE :<input type="radio" value="male" name="gender" {...register("gender")}></input>
            <br/> FEMALE :<input type="radio" value="female" name="gender" {...register("gender")}></input>
        </div>
        <div>
            <label>SKILLS</label>
            <br/> JAVA :<input type="checkbox" value="java" name="skills" {...register("skills")}></input>
            <br/> REACT :<input type="checkbox" value="react" name="skills" {...register("skills")}></input>
            <br/> ANGULAR :<input type="checkbox" value="angular" name="skills" {...register("skills")}></input>
        </div>
        <div>
          <input type="submit" value="Submit"></input>
        </div>
      </form>
    </div>
  );
};
