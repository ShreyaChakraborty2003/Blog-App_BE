import blogModel from "../models/blog_model.js"


const getSinglePost=async(req,res)=>{
    try {
        const postId=req.params.id
        const findPost=await blogModel.findById(postId)

        //populate all comments and user 
        .populate({
            path:'comments',
            populate:{
                path:'userId'
            }
        })


        if(!findPost){
            return res.status(404).json({
                success:false,
                message:"blog post not found",
                           
               })
        }
        res.status(200).json({
            success:true,
            message:"Blog post are found",
            post:findPost
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"internal server error",
           
           })
    }
}

export {getSinglePost}