import axios from "axios";
import React, { useEffect, useState } from "react";
import { CustomeLoder } from "../components/CustomeLoder";

export const ApiDemo1 = () => {
  const [message, setmessage] = useState("");
  const [users, setusers] = useState([]);
  const [isLoading, setisLoading] = useState(false)
  const getApiCall = async () => {

    setisLoading(true) // set loading true

    const response = await axios.get("https://node5.onrender.com/user/user");
    console.log("res", response); //it will axios response....
    console.log("res.data", response.data); //it will data from api...
    console.log("message", response.data.message);
    setmessage(response.data.message);
    console.log("data array ", response.data.data);
    setusers(response.data.data);

    setisLoading(false) // set loading false
  };

  useEffect(() => {
    getApiCall();
  }, []);


  const deleteUser = async(id)=>{

    const res = await axios.delete("https://node5.onrender.com/user/user/"+id);
    
    if(res.status === 204){
        getApiCall();
    }



    
  }

  return (
    <div>
        {
            isLoading && <CustomeLoder/>
        }
      <h1 style={{ color: "blue" }}>ApiDemo1</h1>

      {message}
      <table className="table table-dark">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>AGE</td>
            <td>STATUS</td>
            <td>ACTION</td>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.isActive ? "Active" : "Not Active"}</td>
                <td>
                  <button onClick={()=>{deleteUser(user._id)}} className="btn btn-danger">DELETE</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
