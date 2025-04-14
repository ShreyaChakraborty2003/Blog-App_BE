import jwt from "jsonwebtoken"
import userModel from "../models/user_model.js"

//isAdmin for blogs creation: user is admin or not
const isAdmin=async(req,res,next)=>{
    try {
        
        const token=req.cookies.token
        if(!token){
            return res.status(401).json({
                message:"Unauthorized: No token provoided"
            })
        }
        const decoded=jwt.verify(token,process.env.JWT_SECREATE)
        const user=await userModel.findById(decoded.userId)
        
        if(!user){
              return res.status(403).json({
                success:false,
                message:"Unauthorized: no user found"
              })
        }
       if(user.role!='admin'){
        return res.status(403).json({
            success:false,
            message:"Unauthorized: user is not an admin"
          })
       }
     next()


    } catch (error) {
        console.log(error)
        return res.status(500).json({
        success:false,
        message:"internal server error",
       
       })
    }
}


//islogin

const isLogin=async(req,res,next)=>{
    try {
        
        const token=req.cookies.token
        if(!token){
            return res.status(401).json({
                message:"Unauthorized: No token provoided"
            })
        }
        const decoded=jwt.verify(token,process.env.JWT_SECREATE)
        const user=await userModel.findById(decoded.userId)
        
        if(!user){
              return res.status(403).json({
                success:false,
                message:"Unauthorized: no user found"
              })
        }
    // req user send to user
      req.user=user
     next()


    } catch (error) {
        console.log(error)
        return res.status(500).json({
        success:false,
        message:"internal server error",
       
       })
    }
}





export {isAdmin,isLogin}