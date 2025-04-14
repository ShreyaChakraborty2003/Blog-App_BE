import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        mongoose.connect(process.env.DB_URL)
        console.log("Db is connected")
    } catch (error) {
        console.log("db is not connected")
        console.log(error)
        process.exit(1)
    }
}
export default connectDB