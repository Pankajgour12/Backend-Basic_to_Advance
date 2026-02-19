import express from "express";
import connectDB from "./src/config/db.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT||5000;


const app = express();
app.use(express.json());



connectDB();
app.get('/',(req,res)=>{
    res.send("This is the Authenication Session")
})


app.listen(PORT,()=>{
    console.log(`This server is running on http://localhost:${PORT}`);
})