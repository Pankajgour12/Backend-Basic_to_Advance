

import express from 'express'
import userData from './Data/data.js'
const app = express();
const PORT = 3000




// * GET Request ( it is for fetching data from server)

app.get('/',(req,res)=>{
  res.status(200).send("Hello World")
})





//? Industry Standards
app.get('/api/v1/users/',(req,res)=>{
    res.status(200).send(userData)
})




//? router params
app.get('/api/v1/users/:id',(req, res)=>{
    const {id} = req.params;
    const parseId = parseInt(id)
    const user = userData.find((user)=> user.id === parseId)
    if(!user){
        res.status(404).send("User not found")
    }
    res.status(200).send(user)
})



//! POST Request ( it is for sending data to server)
app.post('/api/v1/users/',(req, res)=>{
    res.status(200).send("User created")
})






app.listen(PORT, () => { 
  console.log(`Server is running on the port ${PORT}`); 
})