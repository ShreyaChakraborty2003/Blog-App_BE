import express from "express"
import authRoute from "./routes/auth_routes.js"
import cookieParser from "cookie-parser"
import blogRoute from "./routes/blog_routes.js"
import dashboardRoute from "./routes/dashboard_route.js"
import commentRoute from "./routes/comment_route.js"
import publicRoute from "./routes/public_route.js"
import cors from "cors"
const app=express()

const corsOptions={
    origin:true,
    credentials:true
}


//for data collecting from req body or json
app.use(cors(corsOptions))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())

app.use(express.static('public'))
//auth routes 
app.use('/auth',authRoute)

//blog routes
app.use('/blogs',blogRoute)


//dashboard route
app.use('/dashboard',dashboardRoute)


//comment routes
app.use('/comment',commentRoute)


//public route

app.use('/public',publicRoute)
//home route
app.get('/',(req,res)=>{
    res.send("Hello world")
})





export default app