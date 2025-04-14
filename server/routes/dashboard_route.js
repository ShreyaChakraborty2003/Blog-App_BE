import express from "express"
import { isAdmin } from "../middleware/isAdmin.js"
import { getAllData, getUsers, userDelete } from "../controllers/dashboard.js"

const dashboardRoute=express.Router()

dashboardRoute.get('/',isAdmin,getAllData)
dashboardRoute.get('/users',isAdmin,getUsers)
dashboardRoute.delete('/deleteUser/:id',isAdmin,userDelete)


export default dashboardRoute