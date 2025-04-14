import userModel from "../models/user_model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

//regisration
const Register=async(req,res)=>{
    try {
       const {Fullname,email,password} = req.body

       const existUser=await userModel.find({email})

       if(!existUser){
        return res.status(200).json({
            success:false,
            message:"user alredy exist please login"
        })
       }
     //for image upload
       const imagePath=req.file.filename

    //for password encription -> hash password

    const hasePassword = bcrypt.hashSync(password, 10);


       const newUser=new userModel({
        Fullname,email,password:hasePassword, profile:imagePath
       })
       await newUser.save()


       return res.status(200).json({
        success:true,
        message:"user is registered",
        user:newUser
       })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"internal server error",
           
           })
    }
}

//login 
const Login=async(req,res)=>{
 try {

   const email=req.body.email
   const password=req.body.password


    if(!email || !password){
      return res.status(400).json({
        success:false,
        message:"All fields are required"
      })
    }

     const FindUser=await userModel.findOne({email})

     if(!FindUser){
        return res.status(400).json({
            success:"false",
            message:"no user found please register"
        })
     }

     const comparePassword=await bcrypt.compare(password,FindUser.password)

     if(!comparePassword){
        return res.status(400).json({
            success:"false",
            message:"invalid password"
        })
     }

     //token jeneration
      const token=jwt.sign({userId:FindUser._id},process.env.JWT_SECREATE)

      //store token in cookie
      res.cookie('token',token,{
        httpOnly:true,
        secure:false,
        maxAge:5*24*60*60*1000
      })
       
     res.status(200).json({
        success:true,
        message:"Login successfully",
        user:FindUser,
        token
     })

 } catch (error) {
    console.log(error)
    return res.status(500).json({
        success:false,
        message:"internal server error",
       
       })
 }
}

//logout

const Logout=async(req,res)=>{
      try {
        
            res.clearCookie('token')
            res.status(200).json({
              success:true,
              message:"Logout successfully",
              
           })

      } catch (error) {
        console.log(error)
        return res.status(500).json({
        success:false,
        message:"internal server error",
       
       })
      }
}


export {Register,Login,Logout}