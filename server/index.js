import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();
import User from "./model/User.js";

const app = express()
app.use(express.json())

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGOODB_URI)
        console.log("mongooDB Connecterd 😊")
    }catch(err){
        console.log(err.massage)
    }
}

const PORT = process.env.PORT || 5000 ;

app.listen(PORT , ()=>{
    console.log(`Server Runing on Port ${PORT} 🎉 `)
    connectDB()

})