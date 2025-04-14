import app from "./app.js"
import dotenv from "dotenv"
import connectDB from "./utils/db.js"
dotenv.config()
const port=process.env.PORT || 3000


app.listen(port,()=>{
    console.log(`My server is running at http://localhost:${port}`)
    connectDB()
})