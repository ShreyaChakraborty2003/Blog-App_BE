import blogModel from "../models/blog_model.js"
import fs from 'fs'
import path from "path"

//create blog
const createBlog=async(req,res)=>{
    try {


        const {title,desc}=req.body
        const imagePath=req.file.filename
        const blogData=new blogModel({
            title,desc,
            image:imagePath
        })
        await blogData.save()


        return res.status(200).json({
            success:true,
            message:"blog created successfully",
            data:blogData
           })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"internal server error",
           
           })
    }
}

//delete blogs

const deleteBlog=async(req,res)=>{
try {
    const id=req.params.id

    const blogData=await blogModel.findById({_id:id})
    if(!blogData){
        return res.status(404).json({
            success:false,
            message:"blog not found",
                       
           })
        }

        //image delete from server
    if(blogData.image){
        const profilePath=path.join('public/images',blogData.image)
        fs.promises.unlink(profilePath)
        .then(()=>console.log("post image is deleted "))
        .catch((error)=>console.log("Error deleting post",error))
    }

        const deleteData=await blogModel.findByIdAndDelete(id)
        return res.status(202).json({
            success:true,
            message:"blog deleted successfully",
            blog:deleteData           
           })
    
} catch (error) {
    console.log(error)
    return res.status(500).json({
        success:false,
        message:"internal server error",
       
       })
}
}


//get blogs

const getBlog=async(req,res)=>{
try {
    const blogData=await blogModel.find()
    if(!blogData){
        return res.status(404).json({
            success:false,
            message:"blog not found",
                       
           })
    }




    return res.status(202).json({
        success:true,
        message:"blog fetched successfully",
        blog:blogData           
       })
} catch (error) {
    console.log(error)
    return res.status(500).json({
        success:false,
        message:"internal server error",
       
       })
}
}

//update blogs


const updateBlog=async(req,res)=>{
try {
    
      const {title,desc}=req.body
      const id=req.params.id

      const blogData=await blogModel.findById(id)

      if(!blogData){
        return res.status(404).json({
            success:false,
            message:"blog not found",
                       
           })
      }
     if(title){
        blogData.title=title
     }
     if(desc){
        blogData.desc=desc
     }
     if(req.file){
        blogData.image=req.file.filename
     }
    await blogData.save()
     return res.status(202).json({
        success:true,
        message:"blog updated successfully",
        blog:blogData           
       })



} catch (error) {
    console.log(error)
    return res.status(500).json({
        success:false,
        message:"internal server error",
       
       })
}
}


export {createBlog,deleteBlog,getBlog,updateBlog}