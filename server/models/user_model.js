import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    Fullname :{
        type:String
    },
    email :{
        type:String
    },
    profile :{
        type:String
    },
    password :{
        type:String
    },

    role:{
        type:String,
         enum:['admin','user'],
         default:'user'
    }
},{timestamps:true})

const userModel=mongoose.model("users",userSchema)
export default userModel
