import express from "express"
import { addComment } from "../controllers/comment_controller.js"
import { isLogin } from "../middleware/isAdmin.js"

const commentRoute=express.Router()

//post ->

commentRoute.post('/addcomment',isLogin,addComment)

export default commentRoute