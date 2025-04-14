import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BaseUrl, get } from "../servises/Endpoint";

export default function Post(){
   const {id}=useParams()

   const [singlepost,setSinglepost]=useState(null)
 
   useEffect(()=>{
      SinglePost()
   },[])
  
   const SinglePost=async()=>{
      try {
         const responce=await get(`/public/singlepost/${id}`)
         const data=responce.data
         setSinglepost(data.
            post)
         console.log(data)
      } catch (error) {
         console.log(error)
      }

   }
    return(
        <>
           <div className="container text-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="fw-bold text-white mb-4 display-4">{singlepost && singlepost.title}</h1>

                     <img src={singlepost && `${BaseUrl}/images/${singlepost.image}`} className="img-fluid mb-4" style={{borderRadius:"10px",maxHeight:"500px",objectFit:"cover",width:"100%"}}/>

                     <p className="mb-5">{singlepost && singlepost.desc}</p>

                <hr />

                <h3 className="mt-5 mb-4">Leave a comment</h3>

                   <form >
                     <div className="mb-3">
                        <label htmlFor="comment" className="form-label">Comment</label>
                        <textarea className="form-control" rows="4" placeholder="write your comment here" name="" id="comment" required></textarea>
                     </div>

                     <button type="submit" className="btn btn-primary">Submit Comment</button>
                   </form>
                   <hr />

                     <h3 className="mt-5 mb-4">Comments</h3>
                   
                    {singlepost && singlepost.comments.map((comment)=>{
                     return(
                        <div className="bg-secondary p-3 rounded mb-3 d-flex">

                       <img src={`${BaseUrl}/images/${comment.userId.profile}`} alt="John doe" className="rounded-circle me-3" style={{width:"50px" ,height:"50px",objectFit:"cover"}}/>

                       <div>
                          <h5 className=" mb-1 ml-3 ">{comment.userId.Fullname}</h5>
                          <p className=" mb-0 ml-3">{comment.comment}</p>
                       </div>

                    </div>
                     

                     )
                    })}
                     
                     

                    </div>
                </div>
           </div>


        </>
    )
}