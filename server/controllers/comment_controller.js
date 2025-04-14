import blogModel from "../models/blog_model.js"
import commentModel from "../models/comment_model.js"


//add comment
const addComment=async(req,res)=>{
    try {
        const {postId,userId,comment}=req.body


        const newComment=new commentModel({
            postId,userId,comment
        })


        await newComment.save()

        const existPost=await blogModel.findById(postId)

        if(!existPost){
            return res.status(404).json({
                success:false,
                message:"blog post not found",
                           
               })
            }
        
        existPost.comments.push(newComment._id)
        await existPost.save()
        res.status(200).json({
            success:true,
            message:"comment add successfully",
            comment:newComment
                       
           })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"internal server error",
           
           })
    }
}

export {addComment}