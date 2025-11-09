import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'


import authRoutes from './src/routes/auth.routes.js'

import taskRout from './src/routes/task.routes.js'

const app = express()
const PORT = 8080;


// Global Middleware 
app.use(express.json());
app.use(cookieParser());
app.use(session({
secret: 'your-secret-key',
resave: false,
saveUninitialized: false,
cookie: { 
    httpOnly:true,
    secure:false,
    maxAge: 1000 * 60 * 60 * 24
 } 



}))



// Routes 
app.get('/',(req,res)=>{
    res.send('Welcome to Task Manager API📑');
})


app.use('/auth',authRoutes)

app.use('/task',taskRout)





app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);   
})


