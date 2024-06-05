import React from "react";
import { StudentList } from "./StudentList";

export const Students = () => {
  var students = [
    {
      id: 1,
      name: "Rahul",
      age: 21,
      marks: 82,
    },
    {
      id: 2,
      name: "Raj",
      age: 22,
      marks: 85,
    },
    {
      id: 3,
      name: "Rohan",
      age: 23,
      marks: 88,
    },
  ];

  const deleteStudent = (id)=>{
    alert('Delete Student with ID: '+id);
  }

  return (
    <div>
      <h1>Students</h1>
      <button onClick={()=>{deleteStudent()}}>DELETE</button>
      <StudentList students={students} deleteStudent = {deleteStudent}></StudentList>
    </div>
  );
};
