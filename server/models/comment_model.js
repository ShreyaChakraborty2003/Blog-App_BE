import mongoose from "mongoose"

//comments schema
const commentSchema=new mongoose.Schema({
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"blogs",
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },

    comment:{
        type:String,
        required:true
    }
},{timestamps:true})

//comments model
const commentModel=mongoose.model("comments",commentSchema)

export default commentModel