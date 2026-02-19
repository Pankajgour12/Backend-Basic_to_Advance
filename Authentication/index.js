import express from "express";

const PORT = 3000;

const app = express();

app.get('/',(req,res)=>{
    res.send("This is the Authenication Session")
})


app.listen(PORT,()=>{
    console.log(`This server is running on http://localhost:${PORT}`);
})