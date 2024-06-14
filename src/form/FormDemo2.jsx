import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MyButton } from "../components/MyButton";

export const FormDemo2 = () => {
  //useForm

  const { register, handleSubmit } = useForm();
  const [output, setoutput] = useState({});
  const [usercolor, setcolor] = useState("black");
  const [isFormSubmited, setisFormSubmited] = useState(false);

  //register is used to register the input fields, it is an object
  //handleSubmit is used to submit the form, it is a function
  const submitHandler = (data) => {
    console.log("submit handler...", data);
    setoutput(data);
    setcolor(data.color);
    setisFormSubmited(true);
  };

  return (
    <div>
      <MyButton name ="add" classsss = "btn btn-info"></MyButton>
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
          <br /> MALE :
          <input
            type="radio"
            value="male"
            name="gender"
            {...register("gender")}
          ></input>
          <br /> FEMALE :
          <input
            type="radio"
            value="female"
            name="gender"
            {...register("gender")}
          ></input>
        </div>
        <div>
          <label>SKILLS</label>
          <br /> JAVA :
          <input
            type="checkbox"
            value="java"
            name="skills"
            {...register("skills")}
          ></input>
          <br /> REACT :
          <input
            type="checkbox"
            value="react"
            name="skills"
            {...register("skills")}
          ></input>
          <br /> ANGULAR :
          <input
            type="checkbox"
            value="angular"
            name="skills"
            {...register("skills")}
          ></input>
        </div>
        <div>
          <label>COLOR</label>
          <input type="color" {...register("color")}></input>
        </div>
        <div>
          <label>SELECT Country</label>
          <select {...register("country")}>
            <option value="select">SELECT</option>
            <option value="india">INDIA</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
          </select>
        </div>
        <div>
          <input type="submit" value="Submit"></input>
        </div>
      </form>
      {isFormSubmited && (
        <div style={{ color: usercolor }}>
          <h2>Output</h2>
          <p>First Name : {output.firstName}</p>
          <p>Last Name : {output.lastName}</p>
          <p>Age : {output.age}</p>
          <p>GENDER :{output.gender}</p>
          <p>COUNTRY : {output.country}</p>
        </div>
      )}
    </div>
  );
};
