import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function User(){

           const users=[
             {id:1,name:"Jhon Doe",email:'john@gmail.com'},
             {id:2,name:"Jhane Smith",email:'jane@gmail.com'},
             {id:3,name:"Michel Brown",email:'michel@gmail.com'},
             //add more users for needed
           ];

           const handleDelete=()=>{
            try {
                alert('user deleted successfully')
            } catch (error) {
                
            }
           }

    return(
       <>
           <div className="container">
              <h1 className="text-white mb-4">Users</h1>
              <div className="table-responsive">
                <table className="table table-striped table-dark">
                    <thead>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </thead>

                    <tbody>
                        {users.map((user,index)=>{
                            return(
                                <tr scpe="two">
                            <th>{index+1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>

                            <td>
                                <button className="btn btn-danger" onClick={handleDelete}>
                                    <FaTrashAlt /> Delete
                                </button>
                            </td>
                        </tr>
                            )
                        })}
                    </tbody>
                </table>
              </div>
           </div>
       
       
       </>
    )
}