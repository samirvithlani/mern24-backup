import React from "react";

export default function Content() {


    var boxStyle = {
        width: "auto",
        height: "auto",
        backgroundColor: "#779B9D",
        color: "white",
    }


    var age = 19;
    var name = "Rahul";
    var isMarried = true;
    var user = {
      name: "Ajay",
      city: "Ahmedabad",
    };
  
  return (
    <div style={boxStyle}>
      <h1 style={{color:"blue"}}>HELLO WELCOME TO REACT !!</h1>
      <h2>Not1 1: Every tag must have closing tag</h2>
      <h2>Not1 2 : At a time we can return only 1 tag</h2>
      <h3>Whatever return, it will display only on browser</h3>
      Age = {age}
      <h2>AGe : {age}</h2>
      <h2>Name : {name}</h2>
      <h2>isMarried = {isMarried == true ? "married" : "Not Married"}</h2>
      <h2>User Name : {user.name}</h2>
      <h3>City {user.city}</h3>
    </div>
  );
}
