import React from 'react'

export const StudentList = (props) => {

  const stuObj = {
    id:4,
    name:'Rajesh',
    age:24,
    marks:90
  }
  console.log(props);
  return (
    <div>
      <button onClick={()=>{props.addStudent(stuObj)}} className='btn btn-primary'>ADD</button>
      
        <h2 style={{color:"red"}}>Student List</h2>
        <table className='table table-dark'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Marks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
               props.students?.map((stu)=>{
                return(<tr>
                  <td>{stu.id}</td>
                  <td>{stu.name}</td>
                  <td>{stu.age}</td>
                  <td>{stu.marks}</td>
                  <td>
                    <button onClick={()=>{props.deleteStudent(stu.id)}} className='btn btn-danger'>DELETE</button>
                  </td>
                </tr>)
              })
            }
          </tbody>

        </table>
    </div>
  )
}
