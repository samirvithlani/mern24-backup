import React, { useState } from "react";
import { StudentList } from "./StudentList";

export const Students = () => {
  var [students, setstudents] = useState([
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
  ]);

  const addStudent = (stu) => {
    console.log("Student = ", stu);
    //students = students.push(stu);
    //spread operator
    students = [...students, stu];
    console.log("After Add student = ", students);
    setstudents(students);
  }


  const deleteStudent = (id) => {
    //id ==1
    //alert('Delete Student with ID: '+id);
    students = students.filter((stu) => {
      //stu.id ==1 !=1 --> false
      //stu.id ==2 !=1 --> true
      //stu.id ==3 !=1 --> true
      return stu.id != id;
    });
    setstudents(students);
    console.log("Afeter Delete student = ", students);
  };

  return (
    <div>
      <h1>Students</h1>
      <button
        onClick={() => {
          deleteStudent();
        }}
      >
        DELETE
      </button>
      <StudentList
        students={students}
        deleteStudent={deleteStudent}
        addStudent={addStudent}
      ></StudentList>
    </div>
  );
};
