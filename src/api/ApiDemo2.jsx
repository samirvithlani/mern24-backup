import axios from "axios";
import React from "react";
import { set, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ApiDemo2 = () => {
  const navigate = useNavigate();
  //post
  //form.. data --> post
  const postData = async (data) => {
    //name,email,age,isActive --> json object
    // const userObj = {
    //   name: "kunal",
    //   age: 24,
    //   email: "kunal@gmail.com",
    //   isActive: true,
    // };
    const res = await axios.post(
      "https://node5.onrender.com/user/user",data);
    console.log(res.data); //actual api response...
    console.log(res.status); //status code
    if (res.status === 201) {
      ////alert("Data posted successfully")
      toast.success("User Added Successfully !!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
      setTimeout(() => {
        navigate("/apidemo1");
      }, 3100);
      //navigate("/apidemo1");
    }
  };

  const {register,handleSubmit} = useForm();


  return (
    <div>
      ApiDemo2
      <ToastContainer
        position="top-center"
        autoClose={53000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      <form onSubmit={handleSubmit(postData)}>
        <div>
            <label>Name</label>
            <input type="text" {...register("name")} />
        </div>
        <div>
            <label>Age</label>
            <input type="number" {...register("age")} />
        </div>
        <div>
            <label>Email</label>
            <input type="email" {...register("email")} />
        </div>
        <div>
            <label>isActive</label>
            <br></br><input type="radio" value="true" name ="isActive" {...register("isActive")} /> 
            <br></br><input type="radio" value="false" name ="isActive" {...register("isActive")} /> 
        </div>
        <div>
            <input type="submit" value="Post Data"/>
        </div>
      </form>
      {/* <button
        onClick={() => {
          postData();
        }}
      >
        Post Data
      </button> */}
    </div>
  );
};
