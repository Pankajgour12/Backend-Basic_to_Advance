import express from 'express'
import session from 'express-session'
import cookie from 'cookie-parser'
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 8080 ;


app.use(session({
secret: 'abcdacbdacbdacbd',
saveUninitialized:false,
resave: false,
cookie:{
    maxAge:1000*60*60*24 // 1 Day
}



}));
app.use(cookieParser('pankaj'))




app.get('/',(req,res)=>{
console.log(req.session);
console.log(req.sessionID);





    res.send('Hello World this 🙏🏻');
})

app.get('/login',(req,res)=>{
    req.session.user ={
        name: 'pankaj',
        email:'pnkj@gmail.com',
        age:22
    }
    res.send(`${req.session.user.name} is Logged in`)
    
})
app.get('/logout',(req,res)=>{
    req.session.destroy();

    res.send('logged out')
})



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);   
})
