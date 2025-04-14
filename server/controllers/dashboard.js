import blogModel from "../models/blog_model.js"
import userModel from "../models/user_model.js"
import fs from 'fs'
import path from "path"
const getAllData=async(req,res)=>{
    try {
               
          const blogs=await blogModel.find()
          const users=await userModel.find()
         // comment will be get here

           if( !blogs && !users){
                 return res.status(404).json({
                    success:false,
                    message:"no data found"
                 })
           }

           res.status(200).json({
            success:true,
            users,
            blogs
           })

    } catch (error) {
        console.log(error)
    return res.status(500).json({
        success:false,
        message:"internal server error",
       
       })
    }
}

//user for dash board
const getUsers=async(req,res)=>{
   try {
        
          const users=await userModel.find()
          
         // comment will be get here

           if(!users ){
                 return res.status(404).json({
                    success:false,
                    message:"no data found"
                 })
           }

           res.status(200).json({
            success:true,
            users
           })

    } catch (error) {
        console.log(error)
    return res.status(500).json({
        success:false,
        message:"internal server error",
       
       })
    }
}

//delete users from dashboard
const userDelete=async(req,res)=>{
    try {
        const userId=req.params.id

        const existUser=await userModel.findById(userId)

        if(!existUser){
            return res.status(404).json({
                success: false,
                message:"no user found"

            })
        }

        if(existUser.role=='admin'){
            return res.status(404).json({
                success: false,
                message:"sorry you are admin . You can't delete your account"

            })
        }

            //image delete from server
            if(existUser.profile){
                const profilePath=path.join('public/images',existUser.profile)
                fs.promises.unlink(profilePath)
                .then(()=>console.log("post image is deleted "))
                .catch((error)=>console.log("Error deleting post",error))
            }
        const deleteUser=await userModel.findByIdAndDelete(userId) 

        
        res.status(200).json({
            success:true,
            message:"user deleted successfully",
            user:deleteUser
           })
    } catch (error) {

        return res.status(500).json({
            success:false,
            message:"internal server error",
           
           })
    }
}

export {getAllData,getUsers,userDelete}