import React from "react";

export default function Addpost(){
    return(
       <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow-lg">
                            <div className="card-header bg-primary text-white">

                             <h2 className="text-center mb-0">Add New Post</h2>
                            </div>
                            <div className="card-body p-4">
                                <div method="post" enType="multipart/form-data">
                                     <div className="mb-4">
                                        <label htmlFor="postImage" className="form-label">Upload Image</label>

                                        <input type="file" className="form-control" id="image"/>

                                     </div>
                                   <div className="mb-4">
                                    <label htmlFor="postTitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="postTitle" placeholder="Enter post title" required/>


                                   </div>

                                <div className="mb-4">
                                    <label htmlFor="postDescription" className="form-label">Description</label>

                                    <textarea className="form-control" name="" id="postDescription" rows="6" placeholder="write your post description" required></textarea>
                                </div>

                                <div className="d-grid">

                                    <button type="submit" className="btn btn-primary btn-lg">Submit post</button>
                                </div>


                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
       
       
       </>
    )
}