import React from 'react'

export const MapDemo = () => {
    var users = ["ram", "shyam", "mohan", "sohan"];
    var employees =[
        {
            id:101,
            name:"rahul"
        },
        {
            id:102,
            name:"raj"
        }
    ]
  return (
    <div>
        <h1 style={{color:"blue"}}>MAP DEMO</h1>
        <ul>
            {
                users.map((u)=>{
                    return <li>{u}</li>
                })
            }
        </ul>

        
        <ul>
            {
                employees.map((emp)=>{
                    return(
                        <li>{emp.id} --{emp.name}</li>
                    )
                    
                })
            }
        </ul>
    </div>
  )
}
