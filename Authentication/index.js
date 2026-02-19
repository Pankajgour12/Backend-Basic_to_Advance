import express from "express";
import connectDB from "./src/config/db.js";
import dotenv from "dotenv";
import session from "express-session";
import userRouter from "./src/routes/user.route.js";



dotenv.config();





const PORT = process.env.PORT||5000;


const app = express();
app.use(express.json());


//? Session config 
app.use(
    session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:600000}
})

)



app.get('/',(req,res)=>{
    res.send("This is the Authenication Session")
})

//*Routes
app.use('/api/user',userRouter)



connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log(`This server is running on http://localhost:${PORT}`);
})
}).catch((err)=>{
    console.error("Error connecting to the database:",err.message);
})

