import mongoose from "mongoose";

const blogSchema=new mongoose.Schema({
    title:{
        type:String,
    },
    desc:{
        type:String,
    },
    image:{
        type:String,
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comments"
    }],
    
},{timestamps:true})

const blogModel=mongoose.model("blogs",blogSchema)

export default blogModel