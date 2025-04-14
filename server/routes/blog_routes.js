import express from "express"
import { createBlog, deleteBlog, getBlog, updateBlog } from "../controllers/blog_controller.js"
import { isAdmin } from "../middleware/isAdmin.js"
import upload from "../middleware/multer.js"

const blogRoute=express.Router()


//post-> create
blogRoute.post('/create',isAdmin,upload.single('blogimage'),createBlog)

//get-> get all blog

blogRoute.get('/get',getBlog)


//DELETE/:id  -> delete

blogRoute.delete('/delete/:id',isAdmin,deleteBlog)

//put/:id -> update

blogRoute.put('/update/:id',isAdmin,upload.single('blogimage'),updateBlog)



export default blogRoute