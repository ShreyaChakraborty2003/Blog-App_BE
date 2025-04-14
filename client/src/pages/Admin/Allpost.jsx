import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export default function Allpost(){
    return(
      <>
          <div className="container">
            <h1 className="text-center mb-4 text-white">All Posts</h1>
            <div className="row">
                <div className="col-md-4 col-lg-4 col-12">
                      <div className="card h-100">
                        <img src="https://img.freepik.com/premium-photo/young-green-plant-grows-from-pile-soil-isolated-white_124717-182.jpg?w=826" alt="" />

                       <div className="card-body">
                        <h5 className="card-title">My first Blog</h5>
                        <p className="card-text">This is My first Blog</p>
                       </div>

                       <div className="card-footer d-flex justify-content-between">

                        <button className="btn btn-danger">
                            <FaTrashAlt/> Delete
                        </button>
                        <button className="btn btn-warning">
                            <FaEdit/> Update
                        </button>
                       </div>


                      </div>
                </div>
            </div>
          </div>
      
      </>
    )
}