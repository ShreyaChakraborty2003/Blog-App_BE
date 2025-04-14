import express from "express"
import { getSinglePost } from "../controllers/public_controller.js"

const publicRoute=express.Router()

//get->get single user with comments posts
publicRoute.get('/singlepost/:id',getSinglePost)
export default publicRoute