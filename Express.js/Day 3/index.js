import express from 'express';
import cookieParser from 'cookie-parser'




const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cookieParser())




app.get('/', (req, res) => {
//! cookies - set it
    res.cookie('pankaj','gour',{
        maxAge: 1000 * 60 * 60 
    })
    res.status(200).send('Welcome to the Home 🏠 Page!');
  }    );



app.get('/about',(req, res)=>{
    //! cookies - get it
 
    console.log("cookies",req.cookies);

    if(req.cookies.name && req.cookies.name ==='gour'){
         res.status(200).send({
        id:1,
        name:"pankaj",
        age:24

    })
    }





   

    res.status(403).send({
        message:"Unauthorized user"

    })


})













app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });





