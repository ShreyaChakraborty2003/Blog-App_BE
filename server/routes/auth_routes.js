import express from "express"
import { Login, Logout, Register } from "../controllers/auth_controller.js"
import upload from "../middleware/multer.js"

const authRoute=express.Router()

//authentication
//post-> register
authRoute.post('/register',upload.single('profile'),Register)

//post->login
authRoute.post('/login',Login)

//post->logout
authRoute.post('/logout',Logout)


export default authRoute