import React, { useEffect, useState } from "react";
import { get } from "../../servises/Endpoint";

export default function Dashboard(){
    const [post,setPost]=useState([])
 const [users,setUsers]=useState([])
//  const [comments,setComments]=useState([])

    useEffect(()=>{
        const GetData=async()=>{
            try {
                const response=await get('/dashboard')
                const data=response.data
               setPost(data.Posts)
               setUsers(data.Users)
            //    setComments(data.comments)
               
            } catch (error) {
                console.log(error)
            }
        }
    })
    return(
      <>
       
           <div>

             <h2 className="mb-4 text-white">Dashboard</h2>
                <div className="row">
                    
                    <div className="col-md-4 col-lg-4 col-sm-4 col-12">
                        <div className="card bg-primary text-white mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Total Users</h5>
                                <p className="card-text">{users ?  users.length : '0'}</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-4 col-12">
                        <div className="card bg-success text-white mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Total Posts</h5>
                                <p className="card-text">0</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-4 col-12">
                        <div className="card bg-warning text-white mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Total Comments</h5>
                                <p className="card-text">0</p>
                            </div>

                        </div>
                    </div>


                </div>



           </div>
      </>
    )
}