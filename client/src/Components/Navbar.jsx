import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BaseUrl ,post} from "../servises/Endpoint";
import { RemoveUser } from "../redux/AuthSlice";
import toast from "react-hot-toast";
export default function Navbar(){
  const [isLogin,setIsLogin]=useState(false)

  const navigate=useNavigate()
  const dispatch=useDispatch()
  const user=useSelector((state)=>state.auth.user)
  const handleLogout=async()=>{
    try {
      const request= await post("/auth/logout")
      const response= request.data
       if (request.status==200) {
         navigate('/')
         dispatch(RemoveUser())
         toast.success(response.message)
       }
    } catch (error) {
      console.log(error)
    }
}
    return(
       <>
          <nav className="navbar d-flex justify-content-between align-items-center p-3">
          
            <Link to={'/'}><h1 className="mx-5 text-white fs-2 fw-bold">BlogFun</h1></Link>
        <div className="d-flex align-items-center">
          {!user ?  <Link to={'/login'}> <button className="btn_sign mx-3">Sign in</button></Link>:(
            <div className="dropdown">
            <div className="avatar-container pointer rounded-circle overflow-hidden bg-info " data-bs-toggle="dropdown" aria-expanded="false" style={{width:'40px',height:'40px',cursor:'pointer'}}>


                <img src={`${BaseUrl}/images/${user.profile}`} className="img-fluid h-100 w-100" style={{objectFit:'cover'}} alt="" />

                
              </div>
              <ul className="dropdropdown-menu-end dropdown-menu-dark">
                  { user.role=='admin' ? <li><Link className="dropdown-item" to='/dashboard'>Dashboard</Link></li>:""}
                  <li><Link className="dropdown-item" to={`/profile/2345`}>Profile</Link></li>
                  <li><a className="dropdown-item" onClick={handleLogout} style={{cursor:"pointer"}}>Sign Out</a></li>
                      
                      
               </ul>
                   
            </div>  
          )}
            
                       
        </div>


          </nav>
      </>
    )
}